import profileService from "../services/profileService.js";

// login
export async function login(req, res) {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const profile = await profileService.getProfileByEmailAndPassword(
      email,
      password
    );

    if (!profile) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// update profile field by id
export async function updateProfileField(req, res) {
  try {
    const { id } = req.params;
    const changes = req.body;

    if (!id || !changes) {
      return res.status(400).json({ error: "id and changes required" });
    }

    const updatedProfile = await profileService.updateProfileField(id, changes);

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { login, updateProfileField };
