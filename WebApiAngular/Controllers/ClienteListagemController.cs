using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiAngular.Controllers
{
    public class ClienteListagemController : Controller
    {
        // GET: ClienteListagem
        public ActionResult Index()
        {
            return View();
        }
    }
}