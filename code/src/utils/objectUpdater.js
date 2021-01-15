export const updateObjectInArray = (items, id, newObjData) => {
    return items.map(u => {
        if (u.id === id) {
            return {...u, ...newObjData}
        }
        return u;
    })
}
