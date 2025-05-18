
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useBlogContext } from "@/context/BlogContext";
import { Calendar, Edit, Plus, Search, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

const BlogManagement = () => {
  const navigate = useNavigate();
  const { blogs, deleteBlog, categories } = useBlogContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  
  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleCreateNew = () => {
    navigate('/admin/blogs/new');
  };
  
  const handleEdit = (slug: string) => {
    navigate(`/admin/blogs/edit/${slug}`);
  };
  
  const confirmDelete = (slug: string) => {
    setBlogToDelete(slug);
    setDeleteDialogOpen(true);
  };
  
  const handleDelete = () => {
    if (blogToDelete) {
      // Find blog title for toast message
      const blogTitle = blogs.find(blog => blog.slug === blogToDelete)?.title;
      
      // Delete the blog
      deleteBlog(blogToDelete);
      
      // Show success message
      toast.success(`Blog "${blogTitle}" has been deleted`);
      
      // Close dialog and reset state
      setDeleteDialogOpen(false);
      setBlogToDelete(null);
    }
  };
  
  return (
    <Layout>
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-montserrat font-semibold text-bluemetric-darkblue">
                Blog Management
              </h1>
              <p className="text-gray-600">Manage, edit, and create blog posts</p>
            </div>
            
            <Button 
              onClick={handleCreateNew}
              className="bg-bluemetric-blue hover:bg-bluemetric-mediumblue"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Blog
            </Button>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Filter Blogs</CardTitle>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search blogs..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
          </Card>
          
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBlogs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8">
                        No blogs found matching your filters.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBlogs.map((blog) => (
                      <TableRow key={blog.slug}>
                        <TableCell className="font-medium">{blog.title}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bluemetric-blue bg-opacity-10 text-bluemetric-blue">
                            {blog.category}
                          </span>
                        </TableCell>
                        <TableCell className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2 text-gray-500" />
                          {blog.date}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleEdit(blog.slug)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50"
                              onClick={() => confirmDelete(blog.slug)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
          
          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this blog post? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button 
                  variant="destructive"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>
  );
};

export default BlogManagement;
