'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  const tools = [
    { name: 'AI Script Generator', description: 'Generate captivating scripts with AI insights.', example: 'Craft a 30-second promo script in seconds—boost engagement!' },
    { name: 'Text-to-Speech Synthesis', description: 'Convert text into lifelike voices.', example: 'Narrate videos with natural AI voices—impress your audience!' },
    { name: 'Video Preview Editor', description: 'Create stunning video previews instantly.', example: 'Generate a 10-second teaser for YouTube—drive clicks effortlessly!' },
    { name: 'Scene Suggestion Engine', description: 'Suggest scenes for dynamic videos.', example: 'Propose a cinematic opening— captivate viewers instantly!' },
    { name: 'Auto-Caption Creator', description: 'Generate accurate captions.', example: 'Add subtitles to a vlog—reach a global audience easily!' },
    { name: 'Background Music Composer', description: 'Compose custom music.', example: 'Add a track to elevate your montage—engage viewers emotionally!' },
    { name: 'Video Style Transformer', description: 'Apply artistic styles.', example: 'Turn a video into a vintage masterpiece—stand out creatively!' },
    { name: 'Interactive Video Overlays', description: 'Add clickable overlays.', example: 'Create a shoppable video—boost sales directly!' },
    { name: 'Video Summarizer', description: 'Summarize videos into highlights.', example: 'Condense a tutorial into a highlight reel—save time for viewers!' },
    { name: 'Custom Template Builder', description: 'Design branded templates.', example: 'Build a unique intro—reinforce your brand identity!' },
    { name: 'Social Media Optimizer', description: 'Optimize videos for platforms.', example: 'Resize a video for Reels—maximize social reach instantly!' },
    { name: 'Thumbnail Designer', description: 'Generate eye-catching thumbnails.', example: 'Design a thumbnail—skyrocket click-through rates!' },
    { name: 'Text-to-Animation Tool', description: 'Animate text for intros.', example: 'Add kinetic typography—make it unforgettable!' },
    { name: 'Audio Transcription Service', description: 'Transcribe audio accurately.', example: 'Convert a podcast into text—enhance accessibility!' },
    { name: 'Video Enhancer', description: 'Upscale videos with AI.', example: 'Enhance a clip to 4K—deliver crystal-clear content!' },
    { name: 'Collaborative Editing Suite', description: 'Edit videos collaboratively.', example: 'Team up to perfect a video—streamline production!' },
    { name: 'Trend Analyzer', description: 'Analyze trends for ideas.', example: 'Identify trending topics—stay ahead of the curve!' },
    { name: 'B-Roll Library', description: 'Access royalty-free footage.', example: 'Add scenic clips—create immersive stories!' },
    { name: 'Speech-to-Avatar Generator', description: 'Create animated avatars.', example: 'Generate a presenter—engage remotely!' },
    { name: 'Analytics Dashboard', description: 'Track video performance.', example: 'Monitor metrics—optimize for success!' },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-3d glow-purple">Nixly AI Features</h1>
          <div className="features-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2, z: 5 }}
                className="feature-card-3d bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl shadow-3d-lg border border-purple-600 relative"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300 drop-shadow-3d glow-purple">{tool.name}</h3>
                <p className="text-gray-300 text-lg mb-3 drop-shadow-md">{tool.description}</p>
                <p className="text-purple-200 text-md italic drop-shadow-3d glow-blue">{tool.example}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: tools.length * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 2, z: 10 }}
            whileTap={{ scale: 0.95 }}
            className="try-btn-3d mt-12"
          >
            Upgrade to Pro for Full Access
          </motion.button>
        </motion.div>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </div>
    </div>
  );
}