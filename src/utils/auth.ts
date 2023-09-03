//firebase-------------------------------------------
import { getAuth , signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

//firebase-------------------------------------------

export const authLogin = (email: string, password: string) => {
    return new Promise(async (res, rej) => {
        const auth       = getAuth();
        const response   = signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                return res({
                    status : true,
                    data   : data
                });
            })
            .catch(error => {
                return res({
                    status : false,
                    data   : error.code
                });
            });
    });
}

export const authStatus = () => {
    return new Promise(async (res, rej) => {
        const auth           = getAuth();
        const removeListenner = onAuthStateChanged(auth, (user) => {
              removeListenner();
              res(user);
            },
            rej
        );
        return removeListenner;
    });
}


export const authLogout = () => {
    return new Promise(async (res, rej) => {
        const auth   = getAuth();
        const logout = await signOut(auth);
        return res(true)
    });
}


export const authCurrentUser = () => {
    return new Promise(async (res, rej) => {
        
    });
}