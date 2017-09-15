

<script type= "text/javascript">
$(document).ready(function() {
  //Search Value
  //var search = $("#searchTerm").val()
  var search = "dog"

  //Limit of articles
  var limit = 5

  //Begin Date
  //var beginDate = $("startYear").val() + "0101"
  var beginDate = "1991" + "0101"

  //End Date
  // var endDate = $("#endYear").val() + "1231"
  var endDate = "1991" + "1231"

  $("#runSearch").on("click", function() {})
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  url +=
    "?" +
    $.param({
      "api-key": "e60a14b7ea58409c9260ed29275507a6",
      q: search
      // begin_date: beginDate,
      // end_date: endDate
    })

  $.ajax({
    url: url,
    method: "GET"
  })
    .done(function(result) {
      console.log(result)
      console.log(result.response.docs[2].headline.main)
      console.log(result.response.docs[2].byline.original)
      console.log(result.response.docs[2].web_url)
    })
    .fail(function(err) {
      throw err
    })
})
</script>
