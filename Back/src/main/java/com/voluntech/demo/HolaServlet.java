package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.Enumeration;
import java.util.List;
import java.util.ArrayList;

public class HolaServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
   

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<String> login = new ArrayList<String>(); 

        String elemento = null; 
       
        String[] values = null; 
        try {

            DBController DB = new DBController();
            
            String ofertas = DB.getOffers(); 


        
            Enumeration<String> enumeration = request.getParameterNames();

            while (enumeration.hasMoreElements()) {
              
               elemento = (String)enumeration.nextElement();
               values = request.getParameterValues(elemento); 
               login.add(values[0]); 
            }



            // String employeeJsonString  = new Gson().toJson(employee);
            // response.setContentType("application/json");
            // response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.print(ofertas);
            out.flush();

           
            
            //String texto = atm.mensaje;

            //String[] lineas = texto.split("\\?");


        } catch (Exception ex) {
            // handle any errors
            
            System.out.println("fjfhhffhdjsdhd"+ex.getMessage()); 
            // out.println("SQLState: " + ex.getSQLState());
            // out.println("VendorError: " + ex.getErrorCode());
        }

    }
}