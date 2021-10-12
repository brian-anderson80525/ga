const URL = "https://cdn.contentful.com/spaces/65xpfl7lwlp1/environments/master-2021-10-12/entries?access_token=sH6cuOfVp4bRtP3XNLdm2rM5HGLuAs6HGW8nV2PcnX8&content_type=DisneyTriviaQ"
$.ajax(URL)
.then((data) => {
console.log(data)

})