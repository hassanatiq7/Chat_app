import User from '../models/user-model.js';
import bcrypt from 'bcryptjs';
import generateTokenandSetCookie from '../utils/generateTokens.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        if (!username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        });

        if(newUser){
            generateTokenandSetCookie(newUser._id, res)
            await newUser.save();
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
        else{
            res.status(400).json({error:'Invalid user data'})
        }

    } catch (error) {
        console.log('Error in signup controller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const login = async (req,res)=>{
    try {
        const { username, password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
        
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:'Invalid username and Password'})
        }

        generateTokenandSetCookie(user._Id, res)

        res.status(200).json({
            _id: user._id,
            fullname: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log('Error in login controller', error)
        res.status(500).json({error: 'Internal server Error'})
    }
}

export const logout = async (req, res)=>{
    try {
        res.cookie('jwt', '', {maxAge:0})
        res.status(200).json({
            message:'Logout Successfully'
        })
    } catch (error) {
        console.log('Error in logout controller', error)
        res.status(500).json({error: 'Internal server Error'})
    }
}

