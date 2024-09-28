
const { JWT_SECRET } = process.env;

export const login = () => {
    console.log(JWT_SECRET)
    const id = "ferf3";
    console.log(id)
    //const accessToken = jwt.sign({ id }, JWT_SECRET, { subject: "accessApi", expiresIn: "1d" });
    //const refreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET, { subject: "refreshToken", expiresIn: "12" });


    //return { token: accessToken, refreshToken }
}