using Microsoft.AspNetCore.Mvc;
using ProductApi.Models;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private static List<Category> _categories = new List<Category>
        {
            new Category { CategoryId = 1, CategoryName = "Electronics", Description = "Electronic devices and accessories" },
            new Category { CategoryId = 2, CategoryName = "Clothing", Description = "Apparel and fashion items" },
            new Category { CategoryId = 3, CategoryName = "Books", Description = "Books and publications" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Category>> GetCategories()
        {
            return Ok(_categories);
        }

        [HttpGet("{id}")]
        public ActionResult<Category> GetCategory(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpPost]
        public ActionResult<Category> CreateCategory(Category category)
        {
            category.CategoryId = _categories.Max(c => c.CategoryId) + 1;
            _categories.Add(category);
            return CreatedAtAction(nameof(GetCategory), new { id = category.CategoryId }, category);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCategory(int id, Category category)
        {
            var existingCategory = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (existingCategory == null)
            {
                return NotFound();
            }

            existingCategory.CategoryName = category.CategoryName;
            existingCategory.Description = category.Description;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }

            _categories.Remove(category);
            return NoContent();
        }
    }
} 