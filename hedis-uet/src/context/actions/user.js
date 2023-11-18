
export const updateUser = (_name, _image, _email, _password) => ({
    type: 'UPDATEDUSER',
    dataUser: {
        name: _name,
        email: _email,
        password: _password,
        image: _image
    }  
})

export const updatedFavor = (list) => ({
    type: 'UPDATEDFAVOR',
    favorList: list
})

export const updatedAddPack = (list) => ({
    type: 'UPDATEDADDPACK',
    pack: list
})

export const updatedScreen = (list) => ({
    type: 'UPDATEDSCREEN',
    screen: list
})

export const deletePackScreen = (list) => ({
    type: 'DELETEPACKSCREEN',
    screen: list
})

export const deletePack = (list) => ({
    type:  'DELETEPACK',
    pack: list
})
