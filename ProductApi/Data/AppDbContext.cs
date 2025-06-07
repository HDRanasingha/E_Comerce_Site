using Microsoft.EntityFrameworkCore;
using ProductApi.Models;

namespace ProductApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Seed categories
            modelBuilder.Entity<Category>().HasData(
                new Category { CategoryId = 1, CategoryName = "Electronics", Description = "Electronic devices and accessories" },
                new Category { CategoryId = 2, CategoryName = "Clothing", Description = "Apparel and fashion items" },
                new Category { CategoryId = 3, CategoryName = "Books", Description = "Books and publications" }
            );
              // Seed products
            modelBuilder.Entity<Product>().HasData(
                new Product 
                { 
                    ProductId = 1, 
                    ProductName = "Product 1", 
                    ProductPrice = 99.99M, 
                    ProductDescription = "Description for product 1",
                    CategoryId = 1,
                    ProductSku = "SKU001",
                    CreatedDate = new DateTime(2025, 6, 7),
                    ProductShortName = "Prod1"
                },
                new Product 
                { 
                    ProductId = 2, 
                    ProductName = "Product 2", 
                    ProductPrice = 149.99M, 
                    ProductDescription = "Description for product 2",
                    CategoryId = 1,
                    ProductSku = "SKU002",
                    CreatedDate = new DateTime(2025, 6, 7),
                    ProductShortName = "Prod2"
                },
                new Product 
                { 
                    ProductId = 3, 
                    ProductName = "Product 3", 
                    ProductPrice = 199.99M, 
                    ProductDescription = "Description for product 3",
                    CategoryId = 2,
                    ProductSku = "SKU003",
                    CreatedDate = new DateTime(2025, 6, 7),
                    ProductShortName = "Prod3"
                }
            );
        }
    }
}