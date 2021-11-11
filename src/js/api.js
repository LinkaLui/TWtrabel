import jsSHA from "jssha";

const apiData = {
    // 取得所有觀光景點資料
    getAttractionList: '/v2/Tourism/ScenicSpot',
        // 取得指定[縣市]觀光景點資料
        // '/v2/Tourism/ScenicSpot/{City}'
    // 取得所有觀光餐飲資料
    getFoodList: '/v2/Tourism/Restaurant',
        // 取得指定[縣市]觀光餐飲資料
        // /v2/Tourism/Restaurant/{City}
    // 取得所有觀光旅宿資料
    getHotelList: '/v2/Tourism/Restaurant',
        // 取得指定[縣市]觀光旅宿資料
        // /v2/Tourism/Hotel/{City}
    // 取得所有觀光活動資料
    getHotelList: '/v2/Tourism/Activity'
        // 取得指定[縣市]觀光活動資料
        // /v2/Tourism/Activity/{City}
}

const getAuthorizationHeader = () => {
//  填入自己 ID、KEY 開始
    const AppID = '1ffbc5ed1bb544e5b2043eaa729b6a50';
    const AppKey = 'Yb-OzJ0dWhO8u91XHhHn6yl0yyQ';
    const GMTString = new Date().toGMTString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

// ?$select=Name&$filter=contains(DescriptionDetail%2C%27%E7%86%B1%E9%96%80%27) and contains(DescriptionDetail%2C%27%E7%86%B1%E9%96%80%27)&$top=30&$format=JSON

const createParam = (param) => {
    if (!param) { return param }
    // console.log('param:',param)
    let queryString = '?';
    if (param.topic.length > 0 || param.keyWord) {
        queryString += "$filter="
        let arr = [];
        if (param.keyWord) {
            const str = `contains(Description,'${param.keyWord}')`;
            arr.push(str);
        }
        for (let i = 0; i < param.topic.length; i++) {
            switch(param.topic[i]) {
                case 'hot':
                    arr.push("contains(Description,'熱門')");
                    arr.push("Picture/PictureUrl1 ne null");
                    break;
                case 'recommend':
                    arr.push("contains(Description,'推薦')");
                    arr.push("Picture/PictureUrl1 ne null");
                    break;
                case 'bike':
                    arr.push("contains(Description,'自行車')");
                    arr.push("Picture/PictureUrl1 ne null");
                    break;
                case 'youtuber':
                    arr.push("contains(Description,'網紅')");
                    arr.push("Picture/PictureUrl1 ne null");
                    break;
                default:
                    break;
            }
        }
        queryString += arr.join(' and ')
    }
    if (param.top) {
        queryString += ("&$top=" + param.top)
    }
    // param = {
        // keyWord:
        // topic:   
        // hot:
    //     area:
    //     city:
    //     top:
    // }
    // console.log('queryString:',queryString)
    return queryString
}

export const fetchData = async (data, callback) => {
    data.param = data.param || '';
    const url = apiData[data.api] + createParam(data.param);
    // console.log('url:',url)
    const res = await fetch(
        `https://ptx.transportdata.tw/MOTC${url}`,
        {
            headers: getAuthorizationHeader()
        }
    )
    const json = await res.json();
    callback(json)
}