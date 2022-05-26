protected void Page_Load(object sender, EventArgs e)
  
{
      
    if (!IsPostBack)
      
    {
      
        //Set the session value first time
          
        Session["EmpName"] = "Scott";
          
        txtSessionValue.Text = Convert.ToString(Session["EmpName"]);
      
    }
  
}

protected void btnSubmit_Click(object sender, EventArgs e)
  
{
  
    //Set the session value from HiddenField
      
    Session["EmpName"] = hdnSession.Value;
      
    txtSessionValue.Text = Convert.ToString(Session["EmpName"]);
  
}

$(document).ready(function () 
{
   
    $('#<% =btnSubmit.ClientID %>').click(function (e) 
    {
       
        $('#<% =hdnSession.ClientID %>').attr('value', $('#<%= txtSessionValue.ClientID %>').val());
       
    });
   
});
