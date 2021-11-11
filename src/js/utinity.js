const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomData = (list, value) => {
    let randomList= [], origin = JSON.parse(JSON.stringify(list));
    while (randomList.length < value) {
        let randomIndex = getRandomInt(origin.length);
        randomList.push(origin[randomIndex]);
        origin.splice(randomIndex,1);
    }
    return randomList;
}

export const getPageData = (list, currentPage, valuePerPage) => {
    return list.slice((currentPage-1)*valuePerPage,currentPage*valuePerPage);
}