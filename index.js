let pageContent = getPageContent()

window.document.title = pageContent.title
$("#ctWelcome").html(pageContent.welcome)
$("#ctLead").html(pageContent.lead)
$("#ctMoreInfo").html(pageContent.moreinfo)