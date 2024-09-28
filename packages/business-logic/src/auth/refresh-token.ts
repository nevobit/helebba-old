
export const refreshToken = (token: string) => {
    console.log(`Refreshing token: ${token}`)
    //const decodeRefreshToken = jwt.verify(token, JWT_REFRESH_SECRET);

    //console.log(decodeRefreshToken)
    //const accessToken = jwt.sign({ id }, JWT_SECRET, { subject: "accessApi", expiresIn: "1d" });
    //const newRefreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET, { subject: "refreshToken", expiresIn: "1w" });

    //return {
    //    accessToken,
    //    refreshToken: newRefreshToken
    //}

}