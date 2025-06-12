const MenuList = [
    // Blog Tools
    {
        name: 'Blog Title',
        desc: "An AI tool that generates blog titles for your blog post based on the content you provide.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693065.png',
        aiPrompt: 'Give me 5 blog title ideas in bullet list only based on given content. Give me result in Rich text editor format',
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your content",
                field: "input",
                name: "Content",
                required: true,
            },
            {
                label: "Enter Blog Outline",
                field: "textarea",
                name: "Outline",
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: "Generate comprehensive blog content based on your topic and outline with engaging writing style.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1642/1642732.png',
        aiPrompt: 'Generate a complete blog post based on the given topic and outline. Include introduction, main content with subheadings, and conclusion. Use engaging writing style and format in Rich text editor format',
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Enter Blog Outline",
                field: "textarea",
                name: "Outline",
                required: true,
            },
            {
                label: "Target Word Count",
                field: "input",
                name: "WordCount",
                placeholder: "e.g., 800-1000 words"
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: "Get creative and trending blog topic ideas for your niche to keep your content calendar full.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176366.png',
        aiPrompt: 'Generate 10 creative and trending blog topic ideas based on the given niche/category. Include brief descriptions for each topic. Format in Rich text editor format',
        slug: "generate-blog-topics",
        form: [
            {
                label: "Enter Your Niche/Industry",
                field: "input",
                name: "Niche",
                required: true,
                placeholder: "e.g., Technology, Health, Travel"
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "e.g., Beginners, Professionals, Students"
            }
        ]
    },
    {
        name: 'Blog Outline',
        desc: "Create detailed blog outlines with headings, subheadings, and key points to structure your content.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
        aiPrompt: 'Create a detailed blog outline based on the given topic. Include main headings, subheadings, key points, and a brief description for each section. Format in Rich text editor format',
        slug: "blog-outline",
        form: [
            {
                label: "Blog Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Target Word Count",
                field: "input",
                name: "WordCount",
                placeholder: "e.g., 1500 words"
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "Who are you writing for?"
            }
        ]
    },

    // YouTube Tools
    {
        name: 'YouTube SEO Title',
        desc: "Create compelling and SEO-optimized YouTube video titles that drive clicks and improve rankings.",
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate 5 SEO-optimized YouTube video titles based on the given topic. Include relevant keywords, make them click-worthy, and ensure they are under 60 characters. Format in Rich text editor format',
        slug: "youtube-seo-title",
        form: [
            {
                label: "Enter Video Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Target Keywords",
                field: "input",
                name: "Keywords",
                placeholder: "Enter keywords separated by commas"
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: "Generate detailed and engaging YouTube video descriptions with proper formatting and CTAs.",
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077042.png',
        aiPrompt: 'Create a comprehensive YouTube video description based on the video topic and key points. Include engaging introduction, key timestamps, relevant hashtags, and call-to-actions. Format in Rich text editor format',
        slug: "youtube-description",
        form: [
            {
                label: "Video Title",
                field: "input",
                name: "Title",
                required: true,
            },
            {
                label: "Key Points/Content Overview",
                field: "textarea",
                name: "KeyPoints",
                required: true,
                placeholder: "List main points covered in your video"
            },
            {
                label: "Channel Name",
                field: "input",
                name: "ChannelName"
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: "Generate relevant and trending YouTube tags to improve your video's discoverability and reach.",
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111624.png',
        aiPrompt: 'Generate 15-20 relevant YouTube tags based on the video topic and description. Include a mix of broad and specific tags, trending keywords, and niche-specific terms. Format as comma-separated list in Rich text editor format',
        slug: "youtube-tags",
        form: [
            {
                label: "Video Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Video Description/Summary",
                field: "textarea",
                name: "Description",
                placeholder: "Brief description of your video content"
            }
        ]
    },
    {
        name: 'YouTube Script',
        desc: "Create engaging YouTube video scripts with proper structure, hooks, and call-to-actions.",
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/3039/3039386.png',
        aiPrompt: 'Write a complete YouTube video script based on the topic and duration. Include hook, introduction, main content with smooth transitions, and strong call-to-action. Format in Rich text editor format',
        slug: "youtube-script",
        form: [
            {
                label: "Video Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Video Duration",
                field: "select",
                name: "Duration",
                options: ["1-3 minutes", "3-5 minutes", "5-10 minutes", "10+ minutes"]
            },
            {
                label: "Key Points to Cover",
                field: "textarea",
                name: "KeyPoints",
                placeholder: "List main points you want to cover"
            }
        ]
    },

    // Social Media Tools
    {
        name: 'Instagram Caption',
        desc: "Create engaging Instagram captions with hashtags and emojis to boost engagement.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Create an engaging Instagram caption based on the given topic or image description. Include relevant emojis, call-to-action, and suggest 10-15 relevant hashtags. Format in Rich text editor format',
        slug: "instagram-caption",
        form: [
            {
                label: "Post Topic/Image Description",
                field: "textarea",
                name: "Topic",
                required: true,
                placeholder: "Describe your post or image"
            },
            {
                label: "Brand Voice",
                field: "select",
                name: "Voice",
                options: ["Professional", "Casual", "Funny", "Inspirational", "Educational"]
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "e.g., fitness enthusiasts, food lovers"
            }
        ]
    },
    {
        name: 'Twitter Thread',
        desc: "Generate engaging Twitter threads that tell a story and drive engagement.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        aiPrompt: 'Create a Twitter thread (5-10 tweets) based on the given topic. Each tweet should be under 280 characters, engaging, and flow naturally to the next. Include relevant hashtags and emojis. Format in Rich text editor format',
        slug: "twitter-thread",
        form: [
            {
                label: "Thread Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Key Points to Cover",
                field: "textarea",
                name: "KeyPoints",
                placeholder: "List main points for your thread"
            },
            {
                label: "Thread Length",
                field: "select",
                name: "Length",
                options: ["5 tweets", "7 tweets", "10 tweets", "Custom length"]
            }
        ]
    },
    {
        name: 'LinkedIn Post',
        desc: "Create professional LinkedIn posts that drive engagement and build your professional brand.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/145/145807.png',
        aiPrompt: 'Create a professional LinkedIn post based on the given topic. Include engaging hook, valuable insights, and professional call-to-action. Use appropriate formatting and professional tone. Format in Rich text editor format',
        slug: "linkedin-post",
        form: [
            {
                label: "Post Topic",
                field: "input",
                name: "Topic",
                required: true,
            },
            {
                label: "Industry/Field",
                field: "input",
                name: "Industry",
                placeholder: "e.g., Marketing, Technology, Finance"
            },
            {
                label: "Post Type",
                field: "select",
                name: "Type",
                options: ["Industry Insight", "Personal Experience", "Tips & Advice", "Company Update", "Thought Leadership"]
            }
        ]
    },
    {
        name: 'Facebook Post',
        desc: "Generate engaging Facebook posts for personal or business pages with proper formatting.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733547.png',
        aiPrompt: 'Create an engaging Facebook post based on the given topic. Include compelling content, relevant emojis, and encourage engagement through questions or call-to-actions. Format in Rich text editor format',
        slug: "facebook-post",
        form: [
            {
                label: "Post Topic",
                field: "textarea",
                name: "Topic",
                required: true,
                placeholder: "What do you want to post about?"
            },
            {
                label: "Post Purpose",
                field: "select",
                name: "Purpose",
                options: ["Engagement", "Promotion", "Information", "Entertainment", "Community Building"]
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "Who are you targeting?"
            }
        ]
    },

    // Content Enhancement Tools
    {
        name: 'Add Emoji to Text',
        desc: "Enhance your text content by adding relevant and engaging emojis to make it more appealing.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/742/742751.png',
        aiPrompt: 'Add relevant and appropriate emojis to the given text to make it more engaging and visually appealing. Maintain the original meaning and tone. Format in Rich text editor format',
        slug: "add-emoji-text",
        form: [
            {
                label: "Enter Your Text",
                field: "textarea",
                name: "Text",
                required: true,
                placeholder: "Paste your text here to add emojis"
            },
            {
                label: "Emoji Style",
                field: "select",
                name: "Style",
                options: ["Professional", "Casual", "Fun", "Minimal"]
            }
        ]
    },
    {
        name: 'Rewrite Article',
        desc: "Rewrite and improve existing articles while maintaining the original meaning and improving readability.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/1159/1159633.png',
        aiPrompt: 'Rewrite the given article to improve clarity, readability, and engagement while maintaining the original meaning and key points. Use better sentence structure and vocabulary. Format in Rich text editor format',
        slug: "rewrite-article",
        form: [
            {
                label: "Original Article",
                field: "textarea",
                name: "Article",
                required: true,
                placeholder: "Paste your article here to rewrite"
            },
            {
                label: "Writing Tone",
                field: "select",
                name: "Tone",
                options: ["Professional", "Casual", "Academic", "Conversational", "Formal"]
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "e.g., General public, Experts, Students"
            }
        ]
    },
    {
        name: 'Grammar Checker',
        desc: "Check and fix grammar, spelling, and punctuation errors in your text content.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541988.png',
        aiPrompt: 'Check the given text for grammar, spelling, and punctuation errors. Provide the corrected version and list the changes made. Format in Rich text editor format',
        slug: "grammar-checker",
        form: [
            {
                label: "Enter Text to Check",
                field: "textarea",
                name: "Text",
                required: true,
                placeholder: "Paste your text here for grammar checking"
            }
        ]
    },
    {
        name: 'Text Summarizer',
        desc: "Create concise summaries of long articles, documents, or content while preserving key information.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652267.png',
        aiPrompt: 'Create a concise summary of the given text, highlighting the key points and main ideas. Maintain the essential information while reducing length by 70-80%. Format in Rich text editor format',
        slug: "text-summarizer",
        form: [
            {
                label: "Text to Summarize",
                field: "textarea",
                name: "Text",
                required: true,
                placeholder: "Paste the long text here to summarize"
            },
            {
                label: "Summary Length",
                field: "select",
                name: "Length",
                options: ["Brief (2-3 sentences)", "Medium (1 paragraph)", "Detailed (2-3 paragraphs)"]
            }
        ]
    },
    {
        name: 'Tone Changer',
        desc: "Change the tone of your content to match different audiences and purposes.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/3094/3094837.png',
        aiPrompt: 'Rewrite the given text in the specified tone while maintaining the core message and information. Adjust vocabulary, sentence structure, and style accordingly. Format in Rich text editor format',
        slug: "tone-changer",
        form: [
            {
                label: "Original Text",
                field: "textarea",
                name: "Text",
                required: true,
                placeholder: "Enter the text you want to change"
            },
            {
                label: "Target Tone",
                field: "select",
                name: "Tone",
                options: ["Professional", "Casual", "Friendly", "Formal", "Conversational", "Persuasive", "Humorous"]
            }
        ]
    },

    // Email Tools
    {
        name: 'Email Subject Lines',
        desc: "Generate compelling email subject lines that improve open rates and engagement.",
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
        aiPrompt: 'Generate 8-10 compelling email subject lines based on the email content and purpose. Focus on improving open rates with urgency, curiosity, and value propositions. Format in Rich text editor format',
        slug: "email-subject-lines",
        form: [
            {
                label: "Email Purpose",
                field: "input",
                name: "Purpose",
                required: true,
                placeholder: "e.g., Newsletter, Product Launch, Sale Announcement"
            },
            {
                label: "Key Message",
                field: "textarea",
                name: "Message",
                placeholder: "What's the main message of your email?"
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "Who are you emailing?"
            }
        ]
    },
    {
        name: 'Email Newsletter',
        desc: "Create engaging email newsletters with proper structure and compelling content.",
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3178/3178165.png',
        aiPrompt: 'Create a complete email newsletter based on the given topic and key points. Include engaging subject line, introduction, main content sections, and clear call-to-actions. Format in Rich text editor format',
        slug: "email-newsletter",
        form: [
            {
                label: "Newsletter Topic",
                field: "input",
                name: "Topic",
                required: true,
                placeholder: "Main theme of your newsletter"
            },
            {
                label: "Key Updates/Content",
                field: "textarea",
                name: "Content",
                required: true,
                placeholder: "List key points, updates, or content to include"
            },
            {
                label: "Company/Brand Name",
                field: "input",
                name: "BrandName",
                placeholder: "Your company or brand name"
            }
        ]
    },
    {
        name: 'Cold Email',
        desc: "Write effective cold emails for outreach, sales, and networking purposes.",
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png',
        aiPrompt: 'Write a professional cold email based on the given purpose and recipient information. Include personalized opening, clear value proposition, and compelling call-to-action. Keep it concise and engaging. Format in Rich text editor format',
        slug: "cold-email",
        form: [
            {
                label: "Email Purpose",
                field: "select",
                name: "Purpose",
                options: ["Sales Outreach", "Partnership", "Job Application", "Networking", "Guest Posting"],
                required: true
            },
            {
                label: "Recipient Information",
                field: "textarea",
                name: "Recipient",
                placeholder: "What do you know about the recipient? (Company, role, interests)"
            },
            {
                label: "Your Value Proposition",
                field: "textarea",
                name: "Value",
                required: true,
                placeholder: "What value can you provide to them?"
            }
        ]
    },

    // Marketing Tools
    {
        name: 'Product Description',
        desc: "Create compelling product descriptions that highlight features, benefits, and drive sales.",
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3659/3659899.png',
        aiPrompt: 'Write a compelling product description based on the given product details. Highlight key features, benefits, and unique selling points. Use persuasive language and include call-to-action. Format in Rich text editor format',
        slug: "product-description",
        form: [
            {
                label: "Product Name",
                field: "input",
                name: "ProductName",
                required: true,
            },
            {
                label: "Key Features",
                field: "textarea",
                name: "Features",
                required: true,
                placeholder: "List main features and specifications"
            },
            {
                label: "Target Customer",
                field: "input",
                name: "Customer",
                placeholder: "Who is this product for?"
            },
            {
                label: "Unique Selling Point",
                field: "input",
                name: "USP",
                placeholder: "What makes this product special?"
            }
        ]
    },
    {
        name: 'Ad Copy',
        desc: "Generate high-converting ad copy for Google Ads, Facebook Ads, and other platforms.",
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3079/3079067.png',
        aiPrompt: 'Create compelling ad copy for the specified platform and campaign objective. Include attention-grabbing headline, persuasive body text, and strong call-to-action. Focus on benefits and urgency. Format in Rich text editor format',
        slug: "ad-copy",
        form: [
            {
                label: "Platform",
                field: "select",
                name: "Platform",
                options: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads"],
                required: true
            },
            {
                label: "Product/Service",
                field: "input",
                name: "Product",
                required: true,
                placeholder: "What are you advertising?"
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "Who are you targeting?"
            },
            {
                label: "Campaign Objective",
                field: "select",
                name: "Objective",
                options: ["Brand Awareness", "Lead Generation", "Sales", "App Downloads", "Website Traffic"]
            }
        ]
    },
    {
        name: 'Sales Letter',
        desc: "Write persuasive sales letters that convert prospects into customers.",
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055645.png',
        aiPrompt: 'Write a persuasive sales letter based on the product/service details. Use proven copywriting formulas (AIDA, PAS), include social proof, address objections, and create urgency. Format in Rich text editor format',
        slug: "sales-letter",
        form: [
            {
                label: "Product/Service Name",
                field: "input",
                name: "Product",
                required: true,
            },
            {
                label: "Target Customer Pain Points",
                field: "textarea",
                name: "PainPoints",
                required: true,
                placeholder: "What problems does your product solve?"
            },
            {
                label: "Key Benefits",
                field: "textarea",
                name: "Benefits",
                placeholder: "List main benefits and outcomes"
            },
            {
                label: "Price/Offer",
                field: "input",
                name: "Price",
                placeholder: "What's your offer or pricing?"
            }
        ]
    },

    // SEO Tools
    {
        name: 'SEO Meta Description',
        desc: "Generate SEO-optimized meta descriptions that improve click-through rates from search results.",
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png',
        aiPrompt: 'Create SEO-optimized meta descriptions (150-160 characters) based on the page content and target keywords. Make them compelling and include call-to-action to improve CTR. Format in Rich text editor format',
        slug: "seo-meta-description",
        form: [
            {
                label: "Page Title/Topic",
                field: "input",
                name: "Title",
                required: true,
            },
            {
                label: "Target Keywords",
                field: "input",
                name: "Keywords",
                required: true,
                placeholder: "Main keywords separated by commas"
            },
            {
                label: "Page Content Summary",
                field: "textarea",
                name: "Content",
                placeholder: "Brief summary of page content"
            }
        ]
    },
    {
        name: 'Keyword Research',
        desc: "Generate keyword ideas and suggestions for SEO and content marketing strategies.",
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/3094/3094799.png',
        aiPrompt: 'Generate a list of relevant keywords based on the main topic. Include primary keywords, long-tail keywords, and related terms. Categorize by search intent and suggest content ideas. Format in Rich text editor format',
        slug: "keyword-research",
        form: [
            {
                label: "Main Topic/Niche",
                field: "input",
                name: "Topic",
                required: true,
                placeholder: "e.g., Digital Marketing, Fitness, Cooking"
            },
            {
                label: "Target Audience",
                field: "input",
                name: "Audience",
                placeholder: "Who is searching for this?"
            },
            {
                label: "Business Type",
                field: "select",
                name: "Business",
                options: ["E-commerce", "Service Business", "Blog/Content", "SaaS", "Local Business"]
            }
        ]
    },

    // Creative Writing
    {
        name: 'Story Generator',
        desc: "Generate creative stories, plot ideas, and narrative content for various purposes.",
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3145/3145765.png',
        aiPrompt: 'Create an engaging story based on the given genre, characters, and setting. Include compelling plot, character development, and engaging narrative. Format in Rich text editor format',
        slug: "story-generator",
        form: [
            {
                label: "Story Genre",
                field: "select",
                name: "Genre",
                options: ["Fantasy", "Sci-Fi", "Romance", "Mystery", "Adventure", "Horror", "Comedy"],
                required: true
            },
            {
                label: "Main Character",
                field: "input",
                name: "Character",
                placeholder: "Describe your main character"
            },
            {
                label: "Setting/Location",
                field: "input",
                name: "Setting",
                placeholder: "Where does the story take place?"
            },
            {
                label: "Story Length",
                field: "select",
                name: "Length",
                options: ["Short (500 words)", "Medium (1000 words)", "Long (1500+ words)"]
            }
        ]
    },
    {
        name: 'Poem Generator',
        desc: "Create beautiful poems in various styles and formats for different occasions.",
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541979.png',
        aiPrompt: 'Create a poem based on the given theme, style, and mood. Use appropriate rhythm, rhyme scheme, and literary devices. Make it emotionally resonant and well-crafted. Format in Rich text editor format',
        slug: "poem-generator",
        form: [
            {
                label: "Poem Theme",
                field: "input",
                name: "Theme",
                required: true,
                placeholder: "e.g., Love, Nature, Friendship, Loss"
            },
            {
                label: "Poem Style",
                field: "select",
                name: "Style",
                options: ["Free Verse", "Sonnet", "Haiku", "Limerick", "Rhyming Couplets", "Blank Verse"]
            },
            {
                label: "Mood/Tone",
                field: "select",
                name: "Mood",
                options: ["Happy", "Sad", "Romantic", "Inspirational", "Peaceful", "Energetic"]
            }
        ]
    },

    // Business Tools
    {
        name: 'Business Plan',
        desc: "Generate comprehensive business plan sections including executive summary, market analysis, and strategies.",
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281307.png',
        aiPrompt: 'Create a comprehensive business plan section based on the business idea and focus area. Include detailed analysis, strategies, and actionable insights. Format in Rich text editor format',
        slug: "business-plan",
        form: [
            {
                label: "Business Idea",
                field: "textarea",
                name: "Idea",
                required: true,
                placeholder: "Describe your business concept"
            },
            {
                label: "Focus Section",
                field: "select",
                name: "Section",
                options: ["Executive Summary", "Market Analysis", "Marketing Strategy", "Financial Projections", "Operations Plan"],
                required: true
            },
            {
                label: "Industry",
                field: "input",
                name: "Industry",
                placeholder: "What industry is your business in?"
            }
        ]
    },
    {
        name: 'Press Release',
        desc: "Write professional press releases for company announcements, product launches, and news.",
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062777.png',
        aiPrompt: 'Write a professional press release based on the news/announcement. Include compelling headline, lead paragraph with key information, supporting details, quotes, and company boilerplate. Format in Rich text editor format',
        slug: "press-release",
        form: [
            {
                label: "Announcement/News",
                field: "textarea",
                name: "News",
                required: true,
                placeholder: "What are you announcing?"
            },
            {
                label: "Company Name",
                field: "input",
                name: "Company",
                required: true,
            },
            {
                label: "Key Details",
                field: "textarea",
                name: "Details",
                placeholder: "Important dates, locations, people involved"
            }
        ]
    },

    // Academic Tools
    {
        name: 'Essay Writer',
        desc: "Generate well-structured essays with introduction, body paragraphs, and conclusion.",
        category: 'Academic',
        icon: 'https://cdn-icons-png.flaticon.com/128/3242/3242257.png',
        aiPrompt: 'Write a well-structured essay on the given topic. Include compelling introduction with thesis statement, well-developed body paragraphs with evidence and analysis, and strong conclusion. Format in Rich text editor format',
        slug: "essay-writer",
        form: [
            {
                label: "Essay Topic",
                field: "input",
                name: "Topic",
                required: true,
                placeholder: "Enter your essay topic or question"
            },
            {
                label: "Essay Type",
                field: "select",
                name: "Type",
                options: ["Argumentative", "Analytical", "Descriptive", "Narrative", "Compare & Contrast", "Cause & Effect"]
            },
            {
                label: "Word Count",
                field: "select",
                name: "WordCount",
                options: ["500 words", "750 words", "1000 words", "1500 words", "2000+ words"]
            },
            {
                label: "Academic Level",
                field: "select",
                name: "Level",
                options: ["High School", "Undergraduate", "Graduate", "Professional"]
            }
        ]
    },
    {
        name: 'Research Summary',
        desc: "Create comprehensive research summaries and literature reviews on academic topics.",
        category: 'Academic',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
        aiPrompt: 'Create a comprehensive research summary on the given topic. Include key findings, methodologies, conclusions, and implications. Structure it as a literature review with proper academic tone. Format in Rich text editor format',
        slug: "research-summary",
        form: [
            {
                label: "Research Topic",
                field: "input",
                name: "Topic",
                required: true,
                placeholder: "Enter your research topic"
            },
            {
                label: "Field of Study",
                field: "input",
                name: "Field",
                placeholder: "e.g., Psychology, Business, Science, History"
            },
            {
                label: "Key Focus Areas",
                field: "textarea",
                name: "Focus",
                placeholder: "What specific aspects should be covered?"
            }
        ]
    },
    {
        name: 'Thesis Statement',
        desc: "Generate strong thesis statements for academic papers and essays.",
        category: 'Academic',
        icon: 'https://cdn-icons-png.flaticon.com/128/3039/3039370.png',
        aiPrompt: 'Create 3-5 strong thesis statements based on the given topic and argument. Make them specific, debatable, and clearly structured. Include brief explanations for each. Format in Rich text editor format',
        slug: "thesis-statement",
        form: [
            {
                label: "Paper Topic",
                field: "input",
                name: "Topic",
                required: true,
                placeholder: "What is your paper about?"
            },
            {
                label: "Your Position/Argument",
                field: "textarea",
                name: "Position",
                required: true,
                placeholder: "What argument are you making?"
            },
            {
                label: "Paper Type",
                field: "select",
                name: "Type",
                options: ["Argumentative", "Analytical", "Expository", "Research Paper"]
            }
        ]
    },

    // Translation Tools
    {
        name: 'Language Translator',
        desc: "Translate text between different languages while maintaining context and meaning.",
        category: 'Translation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3094/3094837.png',
        aiPrompt: 'Translate the given text from the source language to the target language. Maintain the original meaning, tone, and context. Provide natural-sounding translation. Format in Rich text editor format',
        slug: "language-translator",
        form: [
            {
                label: "Text to Translate",
                field: "textarea",
                name: "Text",
                required: true,
                placeholder: "Enter text you want to translate"
            },
            {
                label: "From Language",
                field: "select",
                name: "FromLang",
                options: ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Hindi", "Arabic"],
                required: true
            },
            {
                label: "To Language",
                field: "select",
                name: "ToLang",
                options: ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Hindi", "Arabic"],
                required: true
            }
        ]
    },

    // Code & Technical Tools
    {
        name: 'Code Explainer',
        desc: "Explain code snippets in simple terms, breaking down functionality and logic.",
        category: 'Code & Technical',
        icon: 'https://cdn-icons-png.flaticon.com/128/1336/1336494.png',
        aiPrompt: 'Explain the given code snippet in simple terms. Break down the functionality, explain the logic, and describe what each part does. Make it beginner-friendly. Format in Rich text editor format',
        slug: "code-explainer",
        form: [
            {
                label: "Code Snippet",
                field: "textarea",
                name: "Code",
                required: true,
                placeholder: "Paste your code here"
            },
            {
                label: "Programming Language",
                field: "select",
                name: "Language",
                options: ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Other"]
            },
            {
                label: "Explanation Level",
                field: "select",
                name: "Level",
                options: ["Beginner", "Intermediate", "Advanced"]
            }
        ]
    },
    {
        name: 'API Documentation',
        desc: "Generate comprehensive API documentation with endpoints, parameters, and examples.",
        category: 'Code & Technical',
        icon: 'https://cdn-icons-png.flaticon.com/128/2991/2991148.png',
        aiPrompt: 'Create comprehensive API documentation based on the given API details. Include endpoint descriptions, parameters, request/response examples, and error codes. Format in Rich text editor format',
        slug: "api-documentation",
        form: [
            {
                label: "API Name",
                field: "input",
                name: "ApiName",
                required: true,
                placeholder: "Name of your API"
            },
            {
                label: "API Endpoints",
                field: "textarea",
                name: "Endpoints",
                required: true,
                placeholder: "List your API endpoints and their functions"
            },
            {
                label: "Authentication Method",
                field: "select",
                name: "Auth",
                options: ["API Key", "OAuth", "Bearer Token", "Basic Auth", "None"]
            }
        ]
    },

    // Health & Fitness
    {
        name: 'Workout Plan',
        desc: "Create personalized workout plans based on fitness goals and experience level.",
        category: 'Health & Fitness',
        icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936719.png',
        aiPrompt: 'Create a detailed workout plan based on the fitness goals, experience level, and available time. Include exercises, sets, reps, and progression tips. Format in Rich text editor format',
        slug: "workout-plan",
        form: [
            {
                label: "Fitness Goal",
                field: "select",
                name: "Goal",
                options: ["Weight Loss", "Muscle Building", "Strength Training", "Endurance", "General Fitness", "Athletic Performance"],
                required: true
            },
            {
                label: "Experience Level",
                field: "select",
                name: "Level",
                options: ["Beginner", "Intermediate", "Advanced"]
            },
            {
                label: "Available Days per Week",
                field: "select",
                name: "Days",
                options: ["3 days", "4 days", "5 days", "6 days", "7 days"]
            },
            {
                label: "Equipment Available",
                field: "select",
                name: "Equipment",
                options: ["Full Gym", "Home Gym", "Minimal Equipment", "Bodyweight Only"]
            }
        ]
    },
    {
        name: 'Meal Plan',
        desc: "Generate healthy meal plans based on dietary preferences and nutritional goals.",
        category: 'Health & Fitness',
        icon: 'https://cdn-icons-png.flaticon.com/128/3480/3480618.png',
        aiPrompt: 'Create a detailed meal plan based on dietary preferences, goals, and restrictions. Include breakfast, lunch, dinner, and snacks with nutritional information. Format in Rich text editor format',
        slug: "meal-plan",
        form: [
            {
                label: "Dietary Goal",
                field: "select",
                name: "Goal",
                options: ["Weight Loss", "Weight Gain", "Muscle Building", "General Health", "Athletic Performance"],
                required: true
            },
            {
                label: "Dietary Preferences",
                field: "select",
                name: "Diet",
                options: ["Omnivore", "Vegetarian", "Vegan", "Keto", "Paleo", "Mediterranean", "Low Carb"]
            },
            {
                label: "Food Allergies/Restrictions",
                field: "input",
                name: "Restrictions",
                placeholder: "e.g., nuts, dairy, gluten"
            },
            {
                label: "Meal Plan Duration",
                field: "select",
                name: "Duration",
                options: ["3 days", "7 days", "14 days", "30 days"]
            }
        ]
    },

    // Travel Tools
    {
        name: 'Travel Itinerary',
        desc: "Create detailed travel itineraries with attractions, activities, and recommendations.",
        category: 'Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936886.png',
        aiPrompt: 'Create a detailed travel itinerary for the specified destination and duration. Include must-visit attractions, activities, restaurants, and practical tips. Organize by days with timing suggestions. Format in Rich text editor format',
        slug: "travel-itinerary",
        form: [
            {
                label: "Destination",
                field: "input",
                name: "Destination",
                required: true,
                placeholder: "e.g., Paris, France or Tokyo, Japan"
            },
            {
                label: "Trip Duration",
                field: "select",
                name: "Duration",
                options: ["1-2 days", "3-4 days", "5-7 days", "1-2 weeks", "2+ weeks"]
            },
            {
                label: "Travel Style",
                field: "select",
                name: "Style",
                options: ["Budget", "Mid-range", "Luxury", "Adventure", "Cultural", "Relaxation"]
            },
            {
                label: "Interests",
                field: "input",
                name: "Interests",
                placeholder: "e.g., museums, food, nightlife, nature"
            }
        ]
    },

    // Recipe Tools
    {
        name: 'Recipe Generator',
        desc: "Create delicious recipes based on available ingredients and dietary preferences.",
        category: 'Food & Recipe',
        icon: 'https://cdn-icons-png.flaticon.com/128/3595/3595455.png',
        aiPrompt: 'Create a detailed recipe based on the given ingredients and preferences. Include ingredient list with measurements, step-by-step instructions, cooking time, and serving suggestions. Format in Rich text editor format',
        slug: "recipe-generator",
        form: [
            {
                label: "Available Ingredients",
                field: "textarea",
                name: "Ingredients",
                required: true,
                placeholder: "List ingredients you have available"
            },
            {
                label: "Cuisine Type",
                field: "select",
                name: "Cuisine",
                options: ["Any", "Italian", "Chinese", "Indian", "Mexican", "Mediterranean", "American", "French", "Thai", "Japanese"]
            },
            {
                label: "Dietary Restrictions",
                field: "select",
                name: "Diet",
                options: ["None", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Low-Carb", "Keto"]
            },
            {
                label: "Cooking Time",
                field: "select",
                name: "Time",
                options: ["15 minutes", "30 minutes", "1 hour", "2+ hours", "No preference"]
            }
        ]
    },

    // Legal Tools
    {
        name: 'Contract Template',
        desc: "Generate basic contract templates for various business and personal needs.",
        category: 'Legal & Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281289.png',
        aiPrompt: 'Create a basic contract template for the specified type. Include essential clauses, terms, and conditions. Note: This is a template for reference only and should be reviewed by a legal professional. Format in Rich text editor format',
        slug: "contract-template",
        form: [
            {
                label: "Contract Type",
                field: "select",
                name: "Type",
                options: ["Service Agreement", "Employment Contract", "Non-Disclosure Agreement", "Rental Agreement", "Sales Contract", "Partnership Agreement"],
                required: true
            },
            {
                label: "Industry/Context",
                field: "input",
                name: "Industry",
                placeholder: "e.g., Software Development, Consulting, Real Estate"
            },
            {
                label: "Key Terms to Include",
                field: "textarea",
                name: "Terms",
                placeholder: "Specific terms, conditions, or requirements"
            }
        ]
    },

    // Event Planning
    {
        name: 'Event Planner',
        desc: "Create comprehensive event plans with timelines, checklists, and vendor suggestions.",
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936760.png',
        aiPrompt: 'Create a comprehensive event plan including timeline, checklist, vendor suggestions, and budget considerations. Organize by planning phases with specific tasks and deadlines. Format in Rich text editor format',
        slug: "event-planner",
        form: [
            {
                label: "Event Type",
                field: "select",
                name: "Type",
                options: ["Wedding", "Birthday Party", "Corporate Event", "Conference", "Baby Shower", "Graduation", "Holiday Party"],
                required: true
            },
            {
                label: "Number of Guests",
                field: "select",
                name: "Guests",
                options: ["10-25", "25-50", "50-100", "100-200", "200+"]
            },
            {
                label: "Budget Range",
                field: "select",
                name: "Budget",
                options: ["Under $1,000", "$1,000-$5,000", "$5,000-$10,000", "$10,000+", "No specific budget"]
            },
            {
                label: "Event Date (how far in advance)",
                field: "select",
                name: "Timeline",
                options: ["1 month", "3 months", "6 months", "1 year", "More than 1 year"]
            }
        ]
    },

    // Personal Development
    {
        name: 'Goal Setting Plan',
        desc: "Create actionable goal-setting plans with milestones and tracking methods.",
        category: 'Personal Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281313.png',
        aiPrompt: 'Create a comprehensive goal-setting plan using SMART criteria. Include main goal, sub-goals, milestones, action steps, timeline, and tracking methods. Provide motivation tips and obstacle management strategies. Format in Rich text editor format',
        slug: "goal-setting-plan",
        form: [
            {
                label: "Main Goal",
                field: "textarea",
                name: "Goal",
                required: true,
                placeholder: "Describe your main goal in detail"
            },
            {
                label: "Goal Category",
                field: "select",
                name: "Category",
                options: ["Career", "Health & Fitness", "Education", "Financial", "Personal Relationships", "Hobbies", "Travel"]
            },
            {
                label: "Timeline",
                field: "select",
                name: "Timeline",
                options: ["1 month", "3 months", "6 months", "1 year", "2+ years"]
            },
            {
                label: "Current Situation",
                field: "textarea",
                name: "Current",
                placeholder: "Where are you now in relation to this goal?"
            }
        ]
    },

    // Resume & Career
    {
        name: 'Resume Builder',
        desc: "Create professional resumes tailored to specific industries and job positions.",
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        aiPrompt: 'Create a professional resume based on the provided information. Include compelling summary, organized work experience, skills, and education. Tailor content to the target industry and role. Format in Rich text editor format',
        slug: "resume-builder",
        form: [
            {
                label: "Target Job Title",
                field: "input",
                name: "JobTitle",
                required: true,
                placeholder: "e.g., Software Developer, Marketing Manager"
            },
            {
                label: "Industry",
                field: "input",
                name: "Industry",
                placeholder: "e.g., Technology, Healthcare, Finance"
            },
            {
                label: "Work Experience",
                field: "textarea",
                name: "Experience",
                required: true,
                placeholder: "List your work experience, responsibilities, and achievements"
            },
            {
                label: "Skills",
                field: "textarea",
                name: "Skills",
                placeholder: "Technical skills, soft skills, certifications"
            },
            {
                label: "Education",
                field: "input",
                name: "Education",
                placeholder: "Your educational background"
            }
        ]
    },
    {
        name: 'Cover Letter',
        desc: "Write compelling cover letters that showcase your qualifications and enthusiasm.",
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135692.png',
        aiPrompt: 'Write a compelling cover letter based on the job description and candidate information. Highlight relevant experience, show enthusiasm, and demonstrate knowledge of the company. Include strong opening and closing. Format in Rich text editor format',
        slug: "cover-letter",
        form: [
            {
                label: "Job Title",
                field: "input",
                name: "JobTitle",
                required: true,
                placeholder: "Position you're applying for"
            },
            {
                label: "Company Name",
                field: "input",
                name: "Company",
                required: true,
                placeholder: "Company you're applying to"
            },
            {
                label: "Job Description/Requirements",
                field: "textarea",
                name: "JobDesc",
                placeholder: "Key requirements from the job posting"
            },
            {
                label: "Your Relevant Experience",
                field: "textarea",
                name: "Experience",
                required: true,
                placeholder: "Your relevant skills and experience for this role"
            }
        ]
    }
];

// Export the MenuList for use in your application
export default MenuList;