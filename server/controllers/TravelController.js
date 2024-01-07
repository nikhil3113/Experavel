const {Experience} = require('../models/experience.js')

const addExperience = async(req,res) =>{
    const {travellerName, placeVisited, travellerExperience} = req.body;

    try{
        if(!travellerName || !placeVisited || !travellerExperience){
            return res.status(400).json({message: 'Send all required fields'})
        }

        const newExperience = {
            travellerName,
            placeVisited,
            travellerExperience
        }

        const experience = await Experience.create(newExperience);
        return res.status(201).json(experience);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const showExperience = async(req,res) =>{
    try{
        const experiences = await Experience.find({});
        res.status(200).json({
            count: experiences.length,
            data: experiences
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
} 

const getExperience = async(req,res)=>{
    try{
        const {id} = req.params;
        const experience = await Experience.findById(id);
        res.status(200).json(experience);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteExperience = async(req,res)=>{
    try{
        const {id} = req.params;
        const experience = await Experience.findByIdAndDelete(id);

        if(!experience){
            return res.status(404).json({message: 'Experience not found'})
        }
         res.status(200).json({message: 'Experience deleted successfully'})
    } catch(err){
        res.status(500).json({message: err.message})    
    }
}

const likes = async (req, res) => {
    try {
      const { id } = req.params;
      const experience = await Experience.findById(id);
  
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
  
      // Check if the user has already liked the post
      const hasLiked = req.headers['x-has-liked'];
      if (hasLiked) {
        console.log("You've already liked this post!");
        return res.status(400).json({ message: "You've already liked this post" });
      }
  
      // If not, proceed to update likes
      experience.likes += 1;
      await experience.save();
  
      res.status(200).json({ likes: experience.likes });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const unLikes = async (req, res) => {
    try {
      const { id } = req.params;
      const experience = await Experience.findById(id);
  
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
  
      experience.likes -= 1;
      await experience.save();
  
      res.status(200).json({ likes: experience.likes });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {addExperience, showExperience, deleteExperience, getExperience, likes, unLikes};