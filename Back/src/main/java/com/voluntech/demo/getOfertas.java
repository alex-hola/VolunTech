package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.swing.text.AbstractDocument.Content;

import java.io.*;
import java.sql.SQLException;

public class getOfertas extends HttpServlet {
    private static final long serialVersionUID = 1L;

    DBController DB = new DBController();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        setAccessControlHeaders(response);
        // response.setHeader("Content-Type", "application/json; charset=UTF-8");
        try {
            String ofertas = DB.getOffers();
            
            PrintWriter out = response.getWriter();
            out.print(ofertas);
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
