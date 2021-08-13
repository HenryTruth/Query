export const updateObject = (oldObject, updatedProperties) => {
    console.log('[loged object]',oldObject,updateObject)
    return {
        ...oldObject,
        ...updatedProperties
    };
};