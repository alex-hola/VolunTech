package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
//import java.sql.SQLException;
import java.util.Enumeration;


public class GetOfertasUsuario extends HttpServlet {
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
           
            String user = DB.getOfertasUsusario(value[0].toString());
           
            PrintWriter out = response.getWriter();
            out.print(user);
            out.flush();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
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
