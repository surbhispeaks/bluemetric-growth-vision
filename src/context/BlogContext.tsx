
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { insights as initialInsights, categories } from '@/data/insights';

export interface Blog {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
  content?: string;
}

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (slug: string, updatedBlog: Blog) => void;
  deleteBlog: (slug: string) => void;
  getBlogBySlug: (slug: string) => Blog | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  // Try to load blogs from localStorage or use initial data
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : initialInsights;
  });

  // Save blogs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };

  const updateBlog = (slug: string, updatedBlog: Blog) => {
    setBlogs((prevBlogs) => 
      prevBlogs.map((blog) => 
        blog.slug === slug ? updatedBlog : blog
      )
    );
  };

  const deleteBlog = (slug: string) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slug));
  };

  const getBlogBySlug = (slug: string) => {
    return blogs.find((blog) => blog.slug === slug);
  };

  const value = {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    getBlogBySlug,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const categories = [
  "All Categories",
  "Performance Metrics", 
  "Financial Systems", 
  "Cash Flow", 
  "Financial Literacy", 
  "Tax Planning", 
  "Startups", 
  "Financial Planning", 
  "Financial Advisory", 
  "Pricing Strategy", 
  "Financial Leadership", 
  "Business Financing"
];

export default BlogContext;
