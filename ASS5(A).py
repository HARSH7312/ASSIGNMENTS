
# CGI                                                 Servlet
# The CGI programs are written in native OS.	        Servlet is written in java class & its runs in JVM.
# CGI creates a process base for each request.	    Servlet creates a new thread to process each request.
# The CGI is a language-independent interface 
# that allows a server to start an external
# process.	                                        The main purpose of servlets is to add up the functionality to a web server.
# A CGI program needs to be loaded and started on
# each CGI request.	                                Servlets stay in the memory while serving the requests.
# CGI is not able to read the HTTP servers.	        Servlets are useful to read and set the HTTP servers.
# CGI are plateform dependent.	                    Servlets are plateform independent.
# CGI is less secure and is not useful for
# data sharing.


#!/usr/bin/python3
import cgi

print("Content-type: text/html\n")

form = cgi.FieldStorage()
name = form.getvalue("name")

print(f"<html><body><h2>Hello, {name}!</h2></body></html>")
