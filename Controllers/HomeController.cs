using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using movie_search_app.Models;

namespace movie_search_app.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        // using (var client = new HttpClient())
        // {
        //     client.BaseAddress = new Uri("http://www.omdbapi.com/?s=" + "&apikey=3f66eca5");
        //     //HTTP GET
        //     var responseTask = client.GetAsync("student");
        //     responseTask.Wait();

        //     var result = responseTask.Result;
            
        // }
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


}
