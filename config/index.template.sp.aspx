<!DOCTYPE html>
<%@ Page language="C#" %>
<%@ Register Tagprefix="SharePoint" 
     Namespace="Microsoft.SharePoint.WebControls" 
     Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<html>
<!-- This version of index.aspx is the skeleton needed to access REST API in SharePoint 2013 -->
<!-- It will NOT display the current master page, so it's effectively a blank slate for a single-page app -->
<head>
<meta name="WebPartPageExpansion" content="full" />
    <!-- update this to match this file's URL -->
    <base href="/sites/customsites/bam/SitePages/vertex.aspx">
    <meta charset=UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vertex (Production)</title>
	<!-- only needed for JSOM -->
    <!--
    <script src="/_layouts/1033/init.js"></script>
    <script src="/_layouts/MicrosoftAjax.js"></script>
    <script src="/_layouts/sp.core.js"></script>
    <script src="/_layouts/sp.runtime.js"></script>
    <script src="/_layouts/sp.js"></script>
    -->
 </head>
<body>

    <form runat="server">
        <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
    </form>

    <app>
      Loading...
    </app>

    <!-- update this to match the exported js files containing your app -->
    <!-- right now, this version assumes you are using the non-AOT production output -->
    <script async src="/sites/customsites/bam/Documents/vendor.bundle.min.js"></script>
    <script async src="/sites/customsites/bam/Documents/main.bundle.min.js"></script>
    
</body>
</html>
