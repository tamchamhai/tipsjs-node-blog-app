'use strict'

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`[p]::singUp::`, req.body)
            return res.status(201).json({
                code: '200',
                metadata: { userID: 1 },
            })
        } catch (error) {}
    }
}

module.exports = new AccessController()
