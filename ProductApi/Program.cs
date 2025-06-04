builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
...
app.UseCors("AllowAngular");