import React, { useState } from 'react';
import { X, Upload, Plus, Link, Code2, Tag, FileText } from 'lucide-react';
import '../styles/Modal.css';
import '../styles/AddProjectModal.css';

const AddProjectModal = ({ isOpen, onClose, onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Power BI',
    summary: '',
    image: '',
    highlights: '',
    tags: '',
    linkedinUrl: '',
    githubUrl: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const highlightsArray = formData.highlights
      ? formData.highlights.split('\n').filter(h => h.trim().length > 0)
      : ['Interactive project showcase', 'Custom metrics & insights'];

    const tagsArray = formData.tags
      ? formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      : [formData.category, 'Data Analytics'];

    const newProject = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      image: formData.image || imagePreview || '/images/service1.jpg',
      summary: formData.summary || 'Custom project created in portfolio.',
      highlights: highlightsArray,
      tags: tagsArray,
      linkedinUrl: formData.linkedinUrl || 'https://www.linkedin.com/in/heenal-singh-chouhan-7a975133a/',
      githubUrl: formData.githubUrl || 'https://github.com/heenalchouhan04',
      demoUrl: formData.linkedinUrl || 'https://www.linkedin.com/in/heenal-singh-chouhan-7a975133a/',
      featured: true
    };

    onAddProject(newProject);
    onClose();

    // Reset form
    setFormData({
      title: '',
      category: 'Power BI',
      summary: '',
      image: '',
      highlights: '',
      tags: '',
      linkedinUrl: '',
      githubUrl: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card modal-card--lg add-project-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn">
          <X size={20} />
        </button>

        <div className="add-project-header">
          <div className="add-project-badge">
            <Plus size={16} /> ADD NEW PROJECT
          </div>
          <h2 className="add-project-title">Add a New Project to Portfolio</h2>
          <p className="add-project-subtitle">Enter details, upload a thumbnail, and share your latest work.</p>
        </div>

        <form onSubmit={handleSubmit} className="add-project-form">
          <div className="form-group-grid">
            <div className="form-group">
              <label className="form-label">
                <FileText size={15} /> Project Title *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Sales Analytics Dashboard"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Tag size={15} /> Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Power BI">Power BI</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Web App">Web App</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Python / SQL">Python / SQL</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <Upload size={15} /> Project Image / Thumbnail
            </label>
            <div className="image-upload-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="project-img-upload"
                className="image-upload-input"
              />
              <label htmlFor="project-img-upload" className="image-upload-box">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="image-preview" />
                ) : (
                  <div className="image-upload-placeholder">
                    <Upload size={24} />
                    <span>Click to Upload Screenshot / Image</span>
                    <small>(or paste image URL below)</small>
                  </div>
                )}
              </label>
            </div>
            <input
              type="url"
              name="image"
              placeholder="Or enter Image URL (http://...)"
              value={formData.image}
              onChange={(e) => {
                handleChange(e);
                setImagePreview(e.target.value);
              }}
              className="form-input"
              style={{ marginTop: '0.6rem' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Code2 size={15} /> Short Description / Summary
            </label>
            <textarea
              name="summary"
              rows={3}
              placeholder="Brief summary of what this project accomplished..."
              value={formData.summary}
              onChange={handleChange}
              className="form-input form-textarea"
            />
          </div>

          <div className="form-group-grid">
            <div className="form-group">
              <label className="form-label">
                Key Highlights (1 per line)
              </label>
              <textarea
                name="highlights"
                rows={3}
                placeholder="Interactive filters&#10;Custom KPIs & charts&#10;SQL & Power Query"
                value={formData.highlights}
                onChange={handleChange}
                className="form-input form-textarea"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                placeholder="Power BI, SQL, Excel, DAX"
                value={formData.tags}
                onChange={handleChange}
                className="form-input"
              />

              <div style={{ marginTop: '0.8rem' }}>
                <label className="form-label">
                  <Link size={15} /> LinkedIn Post URL
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  placeholder="https://linkedin.com/posts/..."
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <Link size={15} /> GitHub Repository URL
            </label>
            <input
              type="url"
              name="githubUrl"
              placeholder="https://github.com/heenalchouhan04/..."
              value={formData.githubUrl}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="modal-actions" style={{ marginTop: '1.5rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Plus size={18} /> Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
