module.exports = [
    {
        url: '/login',
        type: 'post',
        response() {
            return {
                code: 200,
                msg: 'success',
                data: { accessToken: '111' },
            }
        },
    },
]