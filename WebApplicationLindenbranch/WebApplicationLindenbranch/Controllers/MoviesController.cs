using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationLindenbranch.Models; // måste ha för att komma åt movie klassen i Models.

namespace WebApplicationLindenbranch.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies/Random
        // Kallas på när man går till Movies/Random
        public ActionResult Random()
        {
            // skapa en instans av Movie klassen
            var movie = new Movie() { Name = "Shrek" };
            return View(movie);
        }
    }
}