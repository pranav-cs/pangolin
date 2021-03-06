import action_type from '../action_type'

export const init_socket = socket => {
    return {
        type: action_type.INIT_SOCKET,
        socket
    }
}

export const login = (name, color, photoURL, rooms, current_room, people) => {
    return {
        type: action_type.LOGIN,
        name,
        color,
        photoURL,
        rooms,
        current_room,
        people
    }
}

export const logout = () => {
    return {
        type: action_type.LOGOUT
    }
}

export const add_message = (room, name, text) => {
    return {
        type: action_type.ADD_MESSAGE,
        room,
        name,
        text
    }
}

export const add_person = (name, color, photoURL) => {
    return {
        type: action_type.ADD_PERSON,
        name,
        color,
        photoURL
    }
}

export const remove_person = (name) => {
    return {
        type: action_type.REMOVE_PERSON,
        name
    }
}

export const add_room = (room) => {
    return {
        type: action_type.ADD_ROOM,
        room
    }
}

export const remove_room = (room) => {
    return {
        type: action_type.REMOVE_ROOM,
        room
    }
}

export const change_room = (room) => {
    return {
        type: action_type.CHANGE_ROOM,
        room
    }
}
