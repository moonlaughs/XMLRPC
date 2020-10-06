package my;
import org.apache.xmlrpc.*;

public class JavaServer {

	

	   public static void main (String [] args){
	   
	      try {

	         System.out.println("Attempting to start XML-RPC Server...");
	         
	         WebServer server = new WebServer(80);
	         server.addHandler("izaanddiana", new MyRemoteMethods());
	         server.addHandler("handler2", new MyRemoteMethods3());
	         server.start();
	         
	         System.out.println("Started successfully.");
	         System.out.println("Accepting requests. (Halt program to stop.)");
	         
	      } catch (Exception exception){
	         System.err.println("JavaServer: " + exception);
	      }
	   }

}
