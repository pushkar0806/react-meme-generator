import { username, password } from './secrets'
export const IMPORT_MEMES = 'IMPORT_MEMES';
export const NEW_MEMES = 'NEW_MEMES';

function fetchMemes () {
    return fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
}


function recieveMeme(json) {
    const { memes } = json.data;
    return {
        type: IMPORT_MEMES,
        memes
    }
}


// asynchronuosly calling the above two functions in order = Action Creator
export function fetch_meme() {
    return function(dispatch) {
        return fetchMemes()
            .then(result => dispatch(recieveMeme(result)))
    }
}

export function newMeme(meme) {
    return {
        type: NEW_MEMES,
        meme
    }
}
 export async function postMemeJson(param) {
    param['username'] = username;
    param['password'] = password;  

    const bodyParam = Object.keys(param).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(param[key])
    }).join('&')

    return fetch('https://api.imgflip.com/caption_image', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParam
    }).then(response => response.json())
 }

 export function createMeme(new_meme_object) {
     return function(dispatch) {
         return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
     }
 }