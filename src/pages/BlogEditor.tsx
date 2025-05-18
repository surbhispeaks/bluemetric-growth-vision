
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { insights, categories } from "@/data/insights";
import { ArrowLeft, Save } from "lucide-react";

const BlogEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
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
    if (isEditing) {
      const existingBlog = insights.find(blog => blog.slug === slug);
      if (existingBlog) {
        setFormData({
          title: existingBlog.title,
          excerpt: existingBlog.excerpt,
          category: existingBlog.category,
          slug: existingBlog.slug,
          date: existingBlog.date,
          content: "" // In a real app, we'd fetch the full content
        });
      } else {
        toast.error("Blog post not found");
        navigate('/admin/blogs');
      }
    }
  }, [slug, isEditing, navigate]);
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.category || !formData.excerpt || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Here we would typically save to a database
    // For this demo, we'll just show a success message
    
    if (isEditing) {
      toast.success(`Blog "${formData.title}" has been updated`);
    } else {
      toast.success(`Blog "${formData.title}" has been created`);
    }
    
    // In a real app with a database we would:
    // 1. Save the blog data
    // 2. Redirect to the blog list or the published blog
    
    navigate('/admin/blogs');
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
                  <Textarea 
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Full blog content"
                    rows={12}
                  />
                </div>
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
