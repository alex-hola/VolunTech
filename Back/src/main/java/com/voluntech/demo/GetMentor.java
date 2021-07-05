package com.voluntech.demo;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetMentor extends HttpServlet {
    Enumeration<String>enumeration = null ; 
    DBController DB = null ; 
    String elemento= null; 
    String[] value = null; 
    
    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException , IOException
    {
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        DB = new DBController();
        enumeration = request.getParameterNames(); 
        try {
            while(enumeration.hasMoreElements())
            {
                elemento =(String)enumeration.nextElement(); 
                value = request.getParameterValues(elemento); 
            }

            String user = DB.getMentor(Integer.parseInt(value[0].toString())); 

            PrintWriter out = response.getWriter(); 
            out.print(user); 
            out.flush();

        } catch (Exception e) {
            System.out.println("ERROR : " + e.getMessage());
        }
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        setAccessControlHeaders(resp);
        resp.setStatus(HttpServletResponse.SC_OK);
    }
    private void setAccessControlHeaders(HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET");
    }


}
