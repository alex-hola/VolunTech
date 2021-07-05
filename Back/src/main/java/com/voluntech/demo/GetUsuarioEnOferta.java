package com.voluntech.demo;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import  java.util.*;

public class GetUsuarioEnOferta extends HttpServlet {
    private static final long serialVersionUID = 1L;

    DBController DB = new DBController();
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        setAccessControlHeaders(response);
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
      
           Enumeration<String> enumeration = request.getParameterNames();
            String elemento = null;
            String[] value = null;
            try {
                while (enumeration.hasMoreElements()) {
                    elemento = (String) enumeration.nextElement();
    
                    value = request.getParameterValues(elemento);
                }
               
            
            String resultado = DB.getUsuariosEnOferta(value[0].toString());
            PrintWriter out = response.getWriter();
            out.print(resultado);
            out.flush();


        } catch (SQLException e) {
           
            e.printStackTrace();
        }

    }

    // for Preflight
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
