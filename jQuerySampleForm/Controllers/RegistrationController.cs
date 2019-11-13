using jQuerySampleForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jQuerySampleForm.Controllers
{
    public class RegistrationController : Controller
    {
       
        public ActionResult Registration()
        {
            return View();
        }

        public JsonResult Age()
        {
            List<int> age = new List<int>();
            for(int i=14;i<=60;i++)
            {
                age.Add(i);
            }
            return Json(age, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]

        public void Submit(RegistrationForm registrationForm)
        {
            //ViewBag["FirstName"] = registrationForm.firstName;
            //ViewBag["LastName"] = registrationForm.lastName;
            //ViewBag["Gender"] = registrationForm.gender;


        }

    }
}