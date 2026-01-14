let userData = [];
let userResultHTML = ``;
let selectedUserId = null
const resultHTMLID = document.getElementById("userSingleDetail")

const handleGetUserData = async () => {
    const apiPath = "https://dummyjson.com/users"
    const res = await fetch(apiPath)
    const jsonData = await res?.json()
    return jsonData?.users
}

const handlePrintRecords = async () => {
    const userDataId = document.getElementById("userResults")
    userData = await handleGetUserData()
    for (let i = 0; i < userData.length; i++) {
        let user = userData[i]
        userResultHTML += `<div class="user-info-single" onclick={handleGetDetailInfo(${user.id})}>
        <h5>
       Name: ${user?.firstName}
        </h5>
        <h6>Age: ${user.age}</h6>
        </div>`;
    }
    userDataId.innerHTML = (userResultHTML)
}

const handleGetDetailInfo = (userId) => {
    let filteredInfo = userData.find((u) => u?.id == userId)
    console.log("user id trigger", userId, userData, { filteredInfo })
    const detailHTML = `<div class="single-info">
    <h5>${filteredInfo?.firstName}</h5>
    </div>`;
    console.log("Detail html", detailHTML)
    resultHTMLID.innerHTML = detailHTML
}



handlePrintRecords()