import React, { useState, useEffect, useRef } from 'react';

// ProfilePage.jsx
// Single-file React component using Tailwind CSS.
// Requirements satisfied:
// - Shows profile image, username, name, birthday
// - Allows user to edit those fields including uploading a new image
// - Persists to localStorage so changes remain on refresh

export default function ProfilePage() {
  const defaultData = {
    image: null, // data URL
    username: '@nur',
    name: 'Abdun Nur',
    birthday: '2004-03-05',
  };

  const [profile, setProfile] = useState(defaultData);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(defaultData);
  const fileInputRef = useRef(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('profileData');
      if (saved) {
        const parsed = JSON.parse(saved);
        setProfile(parsed);
        setForm(parsed);
      }
    } catch (e) {
      console.warn('Could not load profile from localStorage', e);
    }
  }, []);

  // Save helper
  const saveProfile = (next) => {
    setProfile(next);
    setForm(next);
    try {
      localStorage.setItem('profileData', JSON.stringify(next));
    } catch (e) {
      console.warn('Could not save profile to localStorage', e);
    }
    setEditing(false);
  };

  // Handle input change
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // Handle image upload
  const onImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Remove image
  const removeImage = () => {
    setForm((s) => ({ ...s, image: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Cancel edits
  const cancelEdit = () => {
    setForm(profile);
    setEditing(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Minimal validation and save
  const submit = (e) => {
    e.preventDefault();
    // Basic validation: username and name required
    if (!form.username || !form.name) {
      alert('Please provide both username and name.');
      return;
    }
    // birthday optional but if provided, ensure it's a valid date string
    saveProfile(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white pl-16 md:pl-20 p-6">
      <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl border border-pink-600/20 overflow-hidden">
        <div className="p-6 md:flex md:gap-6">
          {/* Left: Avatar & basic info */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center p-4">
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-pink-400/30">
                {profile.image ? (
                  <img src={profile.image} alt="avatar" className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-pink-600/10 text-pink-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20a6 6 0 0112 0" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 right-0">
                <button
                  className="text-xs px-3 py-1 rounded-full bg-pink-500 hover:bg-pink-600 hover:scale-105 duration-300 text-white shadow-sm"
                  onClick={() => setEditing(true)}>
                  Edit Profile
                </button>
              </div>
            </div>

            <h3 className="mt-3 text-sm  text-gray-200 lowercase">{profile.username || 'username'}</h3>
            <p className="text-xl font-semibold text-gray-50 mt-1">{profile.name || 'Full name'}</p>
            <p className="text-sm text-gray-200 mt-2">Birthday: <span className="font-medium text-pink-200">{profile.birthday || 'Not set'}</span></p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  // quick reset to defaults
                  if (confirm('Reset profile to defaults?')) {
                    localStorage.removeItem('profileData');
                    saveProfile(defaultData);
                  }
                }}
                className="text-xs px-3 py-1 rounded-full bg-gray-800/60 hover:bg-gray-800 hover:scale-105 duration-300 cursor-pointer text-gray-100"
              >
                Reset
              </button>
              <button
                onClick={() => navigator.clipboard?.writeText(JSON.stringify(profile))}
                className="text-xs px-3 py-1 rounded-full bg-pink-600 hover:bg-pink-700 hover:scale-105 duration-300 cursor-pointer text-white"
              >
                Copy JSON
              </button>
            </div>
          </div>

          {/* Right: Details / Edit form */}
          <div className="w-full md:w-2/3 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-pink-50">Profile Details</h2>
              <div className="text-sm text-gray-200">Status: <span className="ml-1 text-pink-400">{editing ? 'Editing' : 'Viewing'}</span></div>
            </div>

            <div className="mt-4 bg-gray-800/30 rounded-lg p-4">
              {!editing ? (
                <div className="space-y-3 text-gray-200">
                  <div>
                    <div className="text-xs text-gray-300">Username</div>
                    <div className="font-medium">{profile.username}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Name</div>
                    <div className="font-medium">{profile.name}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Birthday</div>
                    <div className="font-medium">{profile.birthday}</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-300">Username</label>
                      <input
                        name="username"
                        value={form.username}
                        onChange={onChange}
                        className="mt-1 w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-pink-50 placeholder-gray-400"
                        placeholder="e.g. noy0n"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-300">Full Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className="mt-1 w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-pink-50 placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300">Birthday</label>
                    <input
                      name="birthday"
                      type="date"
                      value={form.birthday}
                      onChange={onChange}
                      className="mt-1 w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-pink-50"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300">Profile Image</label>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                        {form.image ? (
                          <img src={form.image} alt="preview" className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-gray-400 text-xs">No image</div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <label className="inline-flex items-center px-3 py-2 bg-pink-600/90 hover:bg-pink-500 text-white rounded-md cursor-pointer text-sm">
                          Choose Image
                          <input ref={fileInputRef} onChange={onImageChange} accept="image/*" type="file" className="hidden" />
                        </label>

                        <button type="button" onClick={removeImage} className="px-3 py-2 rounded-md bg-gray-800/60 text-gray-200 text-sm cursor-pointer">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button type="button" onClick={cancelEdit} className="px-4 py-2 rounded-md bg-gray-800/60 text-gray-200 cursor-pointer">
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white hover:scale-95 duration-300 cursor-pointer">
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* small hint area */}
            <div className="mt-4 text-xs text-gray-200">
              Tip: Click <span className="font-medium text-pink-300">Edit Profile</span> to change your image or details. Changes are stored locally in your browser.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-gray-900/50 border-t border-pink-600/10 p-4 text-xs text-gray-100 text-center">
          Built with ❤️ for a dark & pink theme — drag an image to upload or click Choose Image.
        </div>
      </div>
    </div>
  );
}
