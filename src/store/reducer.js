let itemlist = {
    value: "123",
    list: [11]
}
export default (state = itemlist, action) => {
    if(action.type === "change-Value") {
        let newstate = JSON.parse(JSON.stringify(state));
        newstate.value = action.value;
        return newstate
    }
    if(action.type === "submit-Value") {
        let newstate = JSON.parse(JSON.stringify(state));
        newstate.list.push(newstate.value);
        newstate.value = "";
        // console.log(newstate)
        return newstate;
    }
    if(action.type === "delete-Item") {
        let newstate = JSON.parse(JSON.stringify(state));
        newstate.list.splice(action.index, 1);
        return newstate;
    }
    return state
}