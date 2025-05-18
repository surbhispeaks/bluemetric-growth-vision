
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { useBlogContext } from "@/context/BlogContext";
import { ArrowLeft, Save, Bold, Italic, Underline, ListOrdered, ListUnordered, Code, Heading1, Heading2, Heading3, Quote, Link } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const BlogEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { blogs, addBlog, updateBlog, getBlogBySlug, categories } = useBlogContext();
  const isEditing = Boolean(slug);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    slug: "",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    content: ""
  });
  
  useEffect(() => {
    if (isEditing && slug) {
      const existingBlog = getBlogBySlug(slug);
      if (existingBlog) {
        setFormData({
          title: existingBlog.title,
          excerpt: existingBlog.excerpt,
          category: existingBlog.category,
          slug: existingBlog.slug,
          date: existingBlog.date,
          content: existingBlog.content || "" // Ensure content is loaded
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
      } else {
        toast.error("Blog post not found");
        navigate('/admin/blogs');
      }
    }
  }, [slug, isEditing, getBlogBySlug, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };
  
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: !isEditing ? generateSlug(title) : prev.slug
    }));
  };
  
  const validateSlug = (slug: string): boolean => {
    // Skip validation for the current blog when editing
    if (isEditing && formData.slug === slug) return true;
    
    // Check if slug already exists in other blogs
    return !blogs.some(blog => blog.slug === slug);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.category || !formData.excerpt || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Validate slug uniqueness
    if (!validateSlug(formData.slug)) {
      toast.error("This URL slug is already in use. Please modify it to be unique.");
      return;
    }
    
    // Save the blog
    if (isEditing && slug) {
      updateBlog(slug, formData);
      toast.success(`Blog "${formData.title}" has been updated`);
    } else {
      addBlog(formData);
      toast.success(`Blog "${formData.title}" has been created`);
    }
    
    // Navigate back to blog management
    navigate('/admin/blogs');
  };
  
  // Text formatting helpers
  const insertTextFormat = (formatType: string) => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    let formattedText = '';
    let cursorPosition = 0;
    
    switch (formatType) {
      case 'bold':
        formattedText = `**${selectedText || 'bold text'}**`;
        cursorPosition = selectedText ? end + 4 : start + 10;
        break;
      case 'italic':
        formattedText = `*${selectedText || 'italic text'}*`;
        cursorPosition = selectedText ? end + 2 : start + 12;
        break;
      case 'heading1':
        formattedText = `\n# ${selectedText || 'Heading 1'}\n`;
        cursorPosition = selectedText ? end + 4 : start + 11;
        break;
      case 'heading2':
        formattedText = `\n## ${selectedText || 'Heading 2'}\n`;
        cursorPosition = selectedText ? end + 5 : start + 12;
        break;
      case 'heading3':
        formattedText = `\n### ${selectedText || 'Heading 3'}\n`;
        cursorPosition = selectedText ? end + 6 : start + 13;
        break;
      case 'quote':
        formattedText = `\n> ${selectedText || 'Blockquote'}\n`;
        cursorPosition = selectedText ? end + 4 : start + 12;
        break;
      case 'list-unordered':
        formattedText = selectedText ? 
          "\n" + selectedText.split('\n').map(line => `- ${line}`).join('\n') : 
          '\n- List item\n- List item\n- List item\n';
        cursorPosition = selectedText ? end + selectedText.split('\n').length : start + 30;
        break;
      case 'list-ordered':
        formattedText = selectedText ?
          "\n" + selectedText.split('\n').map((line, i) => `${i+1}. ${line}`).join('\n') :
          '\n1. List item\n2. List item\n3. List item\n';
        cursorPosition = selectedText ? end + selectedText.split('\n').length * 3 : start + 33;
        break;
      case 'code':
        formattedText = `\`\`\`\n${selectedText || 'code'}\n\`\`\``;
        cursorPosition = selectedText ? end + 8 : start + 10;
        break;
      case 'link':
        formattedText = `[${selectedText || 'link text'}](url)`;
        cursorPosition = selectedText ? end + 7 : start + 17;
        break;
      default:
        return;
    }
    
    const newContent = 
      formData.content.substring(0, start) + 
      formattedText + 
      formData.content.substring(end);
    
    setFormData(prev => ({ ...prev, content: newContent }));
    
    // Set cursor position after React updates the DOM
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = cursorPosition;
      textarea.selectionEnd = cursorPosition;
    }, 0);
  };
  
  return (
    <Layout>
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <button 
                onClick={() => navigate('/admin/blogs')}
                className="flex items-center text-bluemetric-blue hover:text-bluemetric-mediumblue mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to blogs
              </button>
              <h1 className="text-3xl font-montserrat font-semibold text-bluemetric-darkblue">
                {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>
          </div>
          
          <Card className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>{isEditing ? 'Update Blog Content' : 'Create Blog Content'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="font-medium text-bluemetric-darkblue">Title</label>
                  <Input 
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="Enter blog title"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="slug" className="font-medium text-bluemetric-darkblue">Slug</label>
                  <Input 
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="URL-friendly identifier (auto-generated from title)"
                    className="w-full"
                    readOnly={isEditing}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="category" className="font-medium text-bluemetric-darkblue">Category</label>
                  <Select 
                    value={formData.category} 
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(cat => cat !== "All Categories").map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="excerpt" className="font-medium text-bluemetric-darkblue">Excerpt</label>
                  <Textarea 
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Brief summary of the blog post"
                    rows={2}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="content" className="font-medium text-bluemetric-darkblue">Content</label>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-1 mb-2">
                    <ToggleGroup type="multiple" className="justify-start flex-wrap">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold" onClick={() => insertTextFormat('bold')}>
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" aria-label="Toggle italic" onClick={() => insertTextFormat('italic')}>
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="heading1" aria-label="Insert heading 1" onClick={() => insertTextFormat('heading1')}>
                        <Heading1 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="heading2" aria-label="Insert heading 2" onClick={() => insertTextFormat('heading2')}>
                        <Heading2 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="heading3" aria-label="Insert heading 3" onClick={() => insertTextFormat('heading3')}>
                        <Heading3 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="quote" aria-label="Insert quote" onClick={() => insertTextFormat('quote')}>
                        <Quote className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="list-unordered" aria-label="Insert unordered list" onClick={() => insertTextFormat('list-unordered')}>
                        <ListUnordered className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="list-ordered" aria-label="Insert ordered list" onClick={() => insertTextFormat('list-ordered')}>
                        <ListOrdered className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="code" aria-label="Insert code block" onClick={() => insertTextFormat('code')}>
                        <Code className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="link" aria-label="Insert link" onClick={() => insertTextFormat('link')}>
                        <Link className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  
                  <Textarea 
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Full blog content"
                    rows={12}
                    className="font-mono"
                  />
                </div>
                
                {/* Preview section */}
                {formData.content && (
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-500">Content Preview</h4>
                    <div className="prose prose-bluemetric max-w-none">
                      {formData.content.split('\n').map((paragraph, index) => {
                        if (paragraph.startsWith('# ')) {
                          return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{paragraph.substring(2)}</h1>;
                        } else if (paragraph.startsWith('## ')) {
                          return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{paragraph.substring(3)}</h2>;
                        } else if (paragraph.startsWith('### ')) {
                          return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{paragraph.substring(4)}</h3>;
                        } else if (paragraph.startsWith('> ')) {
                          return <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">{paragraph.substring(2)}</blockquote>;
                        } else if (paragraph.match(/^-\s/)) {
                          // Simple unordered list detection
                          const items = formData.content
                            .split('\n')
                            .filter(line => line.match(/^-\s/))
                            .map((line, i) => <li key={i}>{line.substring(2)}</li>);
                          return index === formData.content.split('\n').findIndex(line => line.match(/^-\s/)) ? 
                            <ul key={index} className="list-disc pl-6 my-4">{items}</ul> : null;
                        } else if (paragraph.match(/^\d+\.\s/)) {
                          // Simple ordered list detection
                          const items = formData.content
                            .split('\n')
                            .filter(line => line.match(/^\d+\.\s/))
                            .map((line, i) => <li key={i}>{line.replace(/^\d+\.\s/, '')}</li>);
                          return index === formData.content.split('\n').findIndex(line => line.match(/^\d+\.\s/)) ? 
                            <ol key={index} className="list-decimal pl-6 my-4">{items}</ol> : null;
                        } else if (paragraph.trim() === '```' || paragraph.match(/^```[a-z]*$/)) {
                          // Code block start/end
                          return null;
                        } else if (paragraph.trim() && formData.content.split('\n').some(line => line.trim() === '```' || line.match(/^```[a-z]*$/))) {
                          // Inside code block
                          const isInBlock = (idx: number) => {
                            const lines = formData.content.split('\n');
                            let inBlock = false;
                            for (let i = 0; i <= idx; i++) {
                              if (lines[i].trim() === '```' || lines[i].match(/^```[a-z]*$/)) {
                                inBlock = !inBlock;
                              }
                            }
                            return inBlock;
                          };
                          if (isInBlock(index)) {
                            return <code key={index} className="block whitespace-pre bg-gray-100 p-2 rounded my-1 font-mono text-sm">{paragraph}</code>;
                          }
                        }
                        
                        // Handle bold and italic inline styles
                        let formattedText = paragraph;
                        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
                        
                        // Handle links
                        formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-bluemetric-blue hover:text-bluemetric-mediumblue underline">$1</a>');
                        
                        return paragraph.trim() ? 
                          <p key={index} className="my-4" dangerouslySetInnerHTML={{ __html: formattedText }}></p> : 
                          <div key={index} className="h-4"></div>;
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin/blogs')}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-bluemetric-blue hover:bg-bluemetric-mediumblue">
                  <Save className="h-4 w-4 mr-2" />
                  {isEditing ? 'Update Blog' : 'Publish Blog'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BlogEditor;
