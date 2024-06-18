const UserModel = require('../model/UserModel');
const CommunityModel = require('../model/CommunityModel')
const MemberModel = require('../model/MemberModel')
const RoleModel = require('../model/RoleModel')

const role = async (req, res) => {
    try {
        const { name } = req.body
        const roleData = new RoleModel({name})
        await roleData.save()
        return res.status(200).json({
            status: true,
            content: {
                data: roleData
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.toString()
        })
    }
}

const getAllroles = async (req, res) => {
    try {
        const allRoles = await RoleModel.find({})
        return res.status(200).json({
            status: true,
            content: {
                data: allRoles
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.toString()
        })
    }
}

const register = async (req, res) => {
    try {
        const userData = req.body
        // console.log(userData);
        const user = new UserModel(userData)
        await user.save()
        return res.status(200).json({
            status: true,
            user: user
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.toString()
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // console.log(email);
        const user = await UserModel.findOne({ email })
        // if ( user != null ) {
            if (email != "") {
                if (password != null) {
                    if (email === user.email && password === user.password) {
                        return res.status(200).json({
                            status: true,
                            msg: "Login Successfull",
                            user: user
                        })
                    } else {
                        return res.status(400).json({
                            status: false,
                            msg: "Email or password is incorrect",
                        })
                    }
                } else {
                    return res.status(400).json({
                        status: false,
                        msg: "Password is required",
                    })
                }
            } else {
                return res.status(400).json({
                    status: false,
                    msg: "Email is required",
                })
            }
        // } else {
        //     return res.status(400).json({
        //         status: false,
        //         msg: "User is not registered",
        //     })
        // }
    } catch (error) {
        return res.status(400).json({
            status: false,
            msg: "Something went wrong",
            error: error.toString()
        })
    }
}

const getMe = async (req, res) => {
    try {
        const { id } = req.query
        // console.log(id);
        const user = await UserModel.findOne({ _id: id })
        return res.status(200).json({
            status: true,
            user: user
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.toString()
        })
    }
}

const community = async (req, res) => {
    try {
        const { id } = req.query
        const { name, slug } = req.body
        // console.log(name, slug);
        const community = new CommunityModel({
            name,
            slug,
            owner: id
        })
        await community.save()
        return res.status(200).json({
            status: true,
            msg: "Community Created",
            details: community
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            msg: "Something went wrong",
            error: error.toString()
        })
    }
}

const getAllCommunities = async (req, res)=> {
    try {
        const allComm = await CommunityModel({})
        return res.status(200).json({
            status: true,
            content: {
                data: [ allComm ]
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.toString()
        })
    }
}


module.exports = {
    role,
    getAllroles,
    register,
    login,
    getMe,
    community,
    getAllCommunities
}