import { Festival } from '../types';

export const festivals: Festival[] = [
  {
    id: 'newyear',
    name: 'New Year',
    description: 'Celebration marking the beginning of the Gregorian calendar year',
    longDescription: 'New Year, celebrated on January 1st, marks the beginning of the Gregorian calendar year. People around the world welcome the new year with fireworks, parties, and gatherings. It is a time of joy, reflection, and setting new goals or resolutions for personal growth. Many attend midnight events, countdowns, or watch live celebrations on television. In India, it is widely celebrated in urban areas with cultural diversity, blending local traditions with modern festivities.',
    date: '2025-01-01',
    region: ['Pan India'],
    religion: ['Secular'],
    images: [
      'https://indiacsr.in/wp-content/uploads/2023/12/New-Year-Party-Now.jpg',
      'https://www.solitarytraveller.com/wp-content/uploads/2023/12/banner-new-year-celebration-2024-mumbai-1024x768.webp',
      'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2018/01/01/Pictures/people-dance-during-beach-mumbai-year-celebrations_526bcc7c-ee62-11e7-ba01-0264b08f54bd.jpg'
    ],
    traditions: [
      'Countdown celebrations at midnight',
      'Fireworks and light shows',
      'Exchanging wishes and greetings',
      'Parties and music events',
      'Setting New Year resolutions'
    ],
    foods: [
      {
        name: 'Cake',
        description: 'Celebratory sweet dessert often enjoyed at midnight',
        imageUrl: 'https://www.fnp.com/images/pr/l/v20241223173310/happy-new-year-pineapple-cake-half-kg_1.jpg'
      },
      {
        name: 'Mocktails and festive snacks',
        description: 'Colorful non-alcoholic drinks served with a variety of festive snacks',
        imageUrl: 'https://sweetsandthankyou.com/wp-content/uploads/2022/11/Cranberry-Lime-Mocktail-Category.jpg'
      }
    ],
    historicalContext: 'The Gregorian New Year originates from the reforms of the Julian calendar by Pope Gregory XIII in 1582. January 1st became the official start of the year in many countries. Today, it is celebrated globally across cultures and communities as a symbol of renewal and hope.'
  },

  {
    id: 'diwali',
    name: 'Diwali',
    description: 'Festival of Lights celebrating the victory of light over darkness',
    longDescription: 'Diwali, the festival of lights, is one of the most significant festivals in Indian culture. It symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. The festival is widely associated with Lakshmi, the goddess of prosperity, and marks Lord Rama\'s return to Ayodhya after defeating Ravana. Houses, shops, and public places are decorated with small oil lamps called diyas. People also enjoy fireworks, exchange gifts, share sweets, and pray for health and prosperity.',
    date: '2025-10-20',
    region: ['Pan India'],
    religion: ['Hindu', 'Jain', 'Sikh'],
    images: [
      'https://images.pexels.com/photos/1580085/pexels-photo-1580085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8887374/pexels-photo-8887374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8818660/pexels-photo-8818660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/HrrW3rO51ak',
    traditions: [
      'Lighting oil lamps (diyas)',
      'Creating colorful rangoli designs',
      'Exchanging gifts and sweets',
      'Performing Lakshmi Puja',
      'Bursting firecrackers'
    ],
    foods: [
      {
        name: 'Kaju Katli',
        description: 'Diamond-shaped cashew fudge',
        imageUrl: 'https://images.pexels.com/photos/18488310/pexels-photo-18488310/free-photo-of-kaju-katri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Gulab Jamun',
        description: 'Deep-fried milk solids soaked in sugar syrup',
        imageUrl: 'https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    historicalContext: 'Diwali has been celebrated for thousands of years, with references found in ancient Sanskrit texts. The tradition began as an important harvest festival, marking the last harvest of the year before winter. Over time, different regions developed their own mythological significance and customs associated with the festival.'
  },
  {
    id: 'holi',
    name: 'Holi',
    description: 'Festival of Colors celebrating the arrival of spring',
    longDescription: 'Holi is a popular ancient Indian festival, also known as the "Festival of Colors" or the "Festival of Love." The festival signifies the triumph of good over evil and the arrival of spring. It is celebrated with people smearing each other with colors, dancing under water sprinklers, and partying. The evening before Holi, large bonfires are lit to signify the burning of evil spirits, known as Holika Dahan. The next day is a free-for-all carnival of colors where everyone plays, chases, and colors each other with dry powder and colored water.',
    date: '2025-03-14',
    region: ['North India', 'East India', 'West India', 'Central India'],
    religion: ['Hindu', 'Secular'],
    images: [
      'https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3447328/pexels-photo-3447328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    traditions: [
      'Playing with colored powders (gulal)',
      'Holika Dahan (bonfire ritual)',
      'Drinking thandai (spiced festive drink)',
      'Musical performances and group dances',
      'Visiting friends and relatives'
    ],
    foods: [
      {
        name: 'Gujiya',
        description: 'Sweet dumpling filled with khoya and dry fruits',
        imageUrl: 'https://images.pexels.com/photos/18488315/pexels-photo-18488315/free-photo-of-gujiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Thandai',
        description: 'Cold milk drink spiced with almonds, fennel seeds, cardamom, and saffron',
        imageUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2021/03/Thandai-Burfi-1014x1536.jpg'
      }
    ],
    historicalContext: 'Holi\'s origins can be traced to various Hindu legends, primarily the story of Holika and Prahlad, which represents the victory of devotion over evil. Another popular legend links Holi to the divine love of Radha and Krishna, where a young Krishna, jealous of Radha\'s fair complexion, colored her face in playful jest.'
  },
  {
    id: 'eid',
    name: 'Eid al-Fitr',
    description: 'Festival marking the end of Ramadan, the Islamic holy month of fasting',
    longDescription: 'Eid al-Fitr is one of the most important festivals in Islam, marking the end of Ramadan, the holy month of fasting. The day begins with prayers at the mosque, followed by a large feast. Muslims dress in their finest clothes, give gifts to children, and donate to charity. It\'s a time for forgiveness, gratitude, and strengthening community bonds. Families and friends gather to share meals, with special dishes prepared for the occasion.',
    date: '2025-03-31',
    region: ['Pan India'],
    religion: ['Muslim'],
    images: [
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/eid-al-fitr-gettyimages-1148084709?_a=BAVAZGDX0',
      'https://qarabic.com/wp-content/uploads/2022/03/Hadith-on-when-to-celebrate-eid-ul-fitr.webp',
      'https://s.abcnews.com/images/International/AP_Eid_al_Fitr_prayer_hb_160705_16x9_992.jpg?w=992'
    ],
    traditions: [
      'Communal prayers (Salat al-Eid)',
      'Giving of gifts (Eidi) to children',
      'Charity (Zakat al-Fitr)',
      'Family gatherings and feasts',
      'Greeting with "Eid Mubarak"'
    ],
    foods: [
      {
        name: 'Sheer Khurma',
        description: 'A rich vermicelli pudding made with milk, dates, and nuts',
        imageUrl: 'https://www.cookwithkushi.com/wp-content/uploads/2023/04/seviyan_kheer_sheer_khurma_01.jpg'
      },
      {
        name: 'Biryani',
        description: 'Fragrant rice dish with meat, spices, and herbs',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1536x1024.jpg'
      }
    ],
    historicalContext: 'Eid al-Fitr has been celebrated by Muslims worldwide for over 1,400 years, since the time of Prophet Muhammad. The festival emphasizes community, charity, and gratitude, marking the successful completion of a month of self-restraint and religious devotion.'
  },
  {
    id: 'pongal',
    name: 'Pongal',
    description: 'Harvest festival celebrated in South India, particularly Tamil Nadu',
    longDescription: 'Pongal is a four-day harvest festival celebrated primarily in Tamil Nadu. It\'s a thanksgiving ceremony for the year\'s harvest and coincides with the sun\'s northward journey. The name "Pongal" refers to both the festival and a sweet dish made with rice, milk, and jaggery that is prepared specially for the occasion. The festival honors the Sun God, cattle, and agricultural tools that help with a successful harvest.',
    date: '2025-01-15',
    region: ['South India'],
    religion: ['Hindu', 'Secular'],
    images: [
      'https://steemitimages.com/1280x0/https://cdn.steemitimages.com/DQmRYSUBXKQmqSYoaRF8o3bQqQJTxV5Lw8H36We8dtDuVCE/Kaanum-Pongal_.jpg',
      'https://steemitimages.com/1280x0/https://cdn.steemitimages.com/DQmX8XwU5KvVbx2xADpgX4xXUrgHYqQLSuDuwrdqiPy8wDV/Pongal.jpg',
      'https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/472673215_122171760920262654_6408552429693236369_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lHOzJUtCU1AQ7kNvwE7Lt7U&_nc_oc=AdmS4gJBA1Rp9G9OCq5ZRwlTuAiXzzGcj2X5ixu4MftJFrlTuubQNTQsJ6FsR9NBPIIZDOc2JoH8PNvpLZoY7Ub3&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=tb5gpfZ0Q16eb9Z_VcTQaQ&oh=00_AfJ0hryIxmMU3AgyvMjNE5ffpc3PUM3Ch88htcNWXGqreQ&oe=68266B75'
    ],
    traditions: [
      'Boiling over of Pongal (rice) from the pot symbolizing prosperity',
      'Decorating cattle with paint, flowers, and bells (Mattu Pongal)',
      'Creating colorful kolam designs outside homes',
      'Offering prayers to the Sun God',
      'Community feasts'
    ],
    foods: [
      {
        name: 'Sakkarai Pongal',
        description: 'Sweet rice pudding with jaggery, cardamom, cashews, and raisins',
        imageUrl: 'https://www.cookwithkushi.com/wp-content/uploads/2022/09/chakkara_pongal_recipe_01.jpg'
      },
      {
        name: 'Venn Pongal',
        description: 'Savory rice and mung dal dish with pepper, cumin, and ghee',
        imageUrl: 'https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-3.jpg'
      }
    ],
    historicalContext: 'Pongal has ancient origins dating back to the Sangam period (200 BCE to 300 CE). The festival\'s roots lie in agrarian traditions, celebrating the winter harvest and expressing gratitude to nature, particularly the Sun and rain, for agricultural abundance.'
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    description: 'Ten-day festival celebrating the goddess Durga',
    longDescription: 'Durga Puja is an annual Hindu festival that celebrates the goddess Durga and commemorates her victory over the demon Mahishasura. The festival is particularly important in West Bengal, Assam, and other eastern states of India. During the festival, elaborate temporary stages called pandals are set up to house beautifully crafted idols of Goddess Durga, depicting her slaying the demon. The last five days involve intense celebration with rituals, cultural performances, and community feasts.',
    date: '2024-10-09',
    region: ['East India', 'Northeast India'],
    religion: ['Hindu'],
    images: [
      'https://pragyata.com/wp-content/uploads/2020/10/Durga-Puja-Odisha-1536x883.jpg',
      'https://images.hindustantimes.com/img/2022/09/30/1600x900/durga_puja_1664502025274_1664502025551_1664502025551.jpg',
      'https://imagesvs.oneindia.com/webp/img/2023/10/durga-puja-small-1697527966.jpg'
    ],
    traditions: [
      'Creating and worshipping elaborate clay idols of Durga',
      'Decorating pandals (temporary shrines)',
      'Sindoor Khela (married women apply vermilion to each other)',
      'Cultural performances including dance and music',
      'Immersion of idols in water (Visarjan)'
    ],
    foods: [
      {
        name: 'Bhog',
        description: 'Community feast including khichuri, mixed vegetables, chutney, and sweet dishes',
        imageUrl: 'https://static.toiimg.com/thumb/msid-71441919,imgsize-1215996,width-400,resizemode-4/71441919.jpg'
      },
      {
        name: 'Mishti Doi',
        description: 'Sweet yogurt dessert',
        imageUrl: 'https://bakewithshivesh.com/wp-content/uploads/2023/04/mishti-doi-scaled.jpg'
      }
    ],
    historicalContext: 'While Durga Puja has ancient roots in Hindu mythology, the grand community celebrations in Bengal began during the late 16th century. It gained particular prominence during the colonial period as a symbol of Bengali cultural identity and continues to evolve as both a religious and cultural phenomenon.'
  },
  {
    id: 'ugadi',
    name: 'Ugadi',
    description: 'Telugu and Kannada New Year celebration',
    longDescription: 'Ugadi marks the beginning of the new year for the people of Andhra Pradesh, Telangana, and Karnataka. The festival name derives from the Sanskrit words yuga (age) and adi (beginning). It is celebrated with traditional decorations, special foods, and cultural events.',
    date: '2025-03-30',
    region: ['South India'],
    religion: ['Hindu'],
    images: [
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/ugadi-pachadi.webp',
      'https://utsav.gov.in/public/uploads/event_picture_image/event_558/16578727182137106002.jpg',
      'https://cookifi.com/blog/wp-content/uploads/2017/03/Ugadi-puja.jpg'
    ],
    traditions: [
      'Preparing Ugadi pachadi',
      'House cleaning and decoration',
      'Reading religious almanac (panchanga)',
      'Family gatherings',
      'Traditional prayers'
    ],
    foods: [
      {
        name: 'Ugadi Pachadi',
        description: 'A special dish combining six different tastes',
        imageUrl: 'https://www.madhuseverydayindian.com/wp-content/uploads/2021/03/andhra-ugadi-pachadi.jpg'
      }
    ],
    historicalContext: 'Ugadi has been celebrated for centuries in South India, marking the beginning of the lunar calendar year. The festival emphasizes the cyclical nature of time and the importance of embracing both sweet and bitter experiences in life.'
  },
  {
    id: 'onam',
    name: 'Onam',
    description: 'Harvest festival of Kerala',
    longDescription: 'Onam is the most important festival of Kerala, celebrating the homecoming of legendary King Mahabali. It is a ten-day harvest festival featuring elaborate flower carpets, boat races, traditional dances, and grand feasts.',
    date: '2024-09-05',
    region: ['South India'],
    religion: ['Hindu', 'Secular'],
    images: [
      'https://www.thomascook.in/blog/wp-content/uploads/2019/08/onam-festival-1024x683-1.jpg',
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/onam-2024-outfit-ideas-154815406-16x9.jpg?VersionId=FSjDcrFqjh7RyJmumJE1uxrZg8F4t7Av&size=690:388',
      'https://www.gokitetours.com/wp-content/uploads/2024/09/2.-Trivandrum-To-Indulge-in-Grand-Onam-Celebrations.webp'
    ],
    traditions: [
      'Creating pookkalam (flower carpets)',
      'Vallam Kali (snake boat races)',
      'Onasadya (grand feast)',
      'Traditional dance performances',
      'Wearing new clothes'
    ],
    foods: [
      {
        name: 'Onasadya',
        description: 'Traditional feast served on banana leaf',
        imageUrl: 'https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/8/20/onasadya.jpg?w=1120&h=583'
      }
    ],
    historicalContext: 'Onam celebrates the golden rule of King Mahabali and commemorates his annual visit to Kerala. The festival transcends religious boundaries and is celebrated by all Keralites.'
  },
  {
    id: 'christmas',
    name: 'Christmas',
    description: 'Celebration of the birth of Jesus Christ',
    longDescription: 'Christmas in India is celebrated with unique local traditions blending with universal Christian customs. Churches are decorated with poinsettia flowers and candles, while homes feature stars and nativity scenes.',
    date: '2024-12-25',
    region: ['Pan India'],
    religion: ['Christian'],
    images: [
      'https://img.freepik.com/free-photo/still-life-christmas-tree-with-decoration-with-copy-space_23-2151868644.jpg?semt=ais_hybrid&w=740',
      'https://media.istockphoto.com/id/491090202/photo/santa-is-placing-gift-boxes-under-christmas-tree.jpg?s=612x612&w=0&k=20&c=UgxoDhhPTh7SckdalBjCLdGmh1zRqVtC3f7-RxMslBY=',
      'https://i.ytimg.com/vi/EbTpOFCsm8E/maxresdefault.jpg'
    ],
    traditions: [
      'Midnight Mass',
      'Carol singing',
      'Decorating Christmas trees',
      'Exchange of gifts',
      'Family feasts'
    ],
    foods: [
      {
        name: 'Christmas Cake',
        description: 'Traditional fruit cake with local spices',
        imageUrl: 'https://glutenfreecuppatea.co.uk/wp-content/uploads/2020/10/gluten-free-christmas-cake-recipe-featured.jpg'
      }
    ],
    historicalContext: 'Christmas celebrations in India date back to the arrival of Portuguese missionaries in the 15th century. The festival has evolved to incorporate local customs while maintaining its religious significance.'
  },
  {
    id: 'bakrid',
    name: 'Bakrid',
    description: 'Festival of Sacrifice commemorating Prophet Ibrahim’s devotion to God',
    longDescription: 'Bakrid, also known as Eid al-Adha, is one of the holiest festivals in Islam. It honors the willingness of Prophet Ibrahim (Abraham) to sacrifice his son as an act of obedience to God. However, God provided a ram to sacrifice instead. The festival begins with prayers at the mosque and involves the ritual sacrifice of an animal, usually a goat, sheep, or cow. The meat is shared among family, friends, and those in need. It’s a time of charity, reflection, and celebration with loved ones.',
    date: '2025-06-07',
    region: ['Pan India'],
    religion: ['Muslim'],
    images: [
      'https://res.cloudinary.com/local-tourism/images/v1686982082/Post/Bakra%20Eid%20Eid%20ul-Adha%20:%20The%20Story%20Behind%20the%20Festival/Bakrid_celebration_dzsknf/Bakrid_celebration_dzsknf.webp?_i=AA',
      'https://newsroompost.com/wp-content/uploads/2021/07/20210721050L-scaled.jpg',
      'https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/bakrid_260720-1.jpg'
    ],
    traditions: [
      'Offering prayers (Salat al-Eid)',
      'Animal sacrifice (Qurbani)',
      'Distributing meat to the poor and needy',
      'Family and community feasts',
      'Greeting with "Eid Mubarak"'
    ],
    foods: [
      {
        name: 'Mutton Biryani',
        description: 'Spicy and aromatic rice dish made with marinated mutton and basmati rice',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg'
      },
      {
        name: 'Kebabs',
        description: 'Grilled or fried meat skewers made with spices and herbs',
        imageUrl: 'https://www.rumispice.com/cdn/shop/articles/kefta-kebabs-with-cumin-seasoned-salt-356050.jpg?v=1660114741'
      }
    ],
    historicalContext: 'Eid al-Adha commemorates the obedience of Prophet Ibrahim, who was willing to sacrifice his son in devotion to God. Celebrated worldwide, it highlights values of sacrifice, compassion, and sharing. The tradition of Qurbani symbolizes giving up what one loves for the sake of faith.'
  },

  {
    id: 'independence-day',
    name: 'Independence Day',
    description: 'Celebration of India\'s independence from British rule',
    longDescription: 'Independence Day commemorates India\'s freedom from British colonial rule in 1947. The day is marked by flag hoisting ceremonies, patriotic celebrations, and cultural programs across the nation.',
    date: '2025-08-15',
    region: ['Pan India'],
    religion: ['Secular'],
    images: [
      'https://webneel.com/wallpaper/sites/default/files/images/08-2013/20-india-independence-day-wallpaper.jpg',
      'https://img.jagranjosh.com/images/2022/August/1282022/Compress_Independence_Day.jpg',
      'https://i.pinimg.com/736x/f0/a5/2f/f0a52ff5c4bd61871db8fce58c249368.jpg'
    ],
    traditions: [
      'Flag hoisting ceremony',
      'Singing national anthem',
      'Cultural programs',
      'Patriotic celebrations',
      'Prime Minister\'s address from Red Fort'
    ],
    foods: [
      {
        name: 'Traditional Indian Sweets',
        description: 'Various sweets in orange, white, and green colors',
        imageUrl: 'https://images.herzindagi.info/webstories/32614/tiranga-barfi-dishes-thumb1674538156-1723611310.jpeg'
      }
    ],
    historicalContext: 'India gained independence on August 15, 1947, after a long struggle for freedom. The day marks the end of British colonial rule and the establishment of a sovereign nation.'
  },
  {
    id: 'kanuma',
    name: 'Kanuma',
    description: 'A festival celebrated the day after Makara Sankranti, honoring cattle',
    longDescription: 'Kanuma is celebrated to show gratitude to cattle, which play a crucial role in agriculture. Farmers decorate and worship their cattle on this day.',
    date: '2025-01-15',
    region: ['South India'],
    religion: ['Hindu'],
    images: [
      'https://www.en.etemaaddaily.com/pages/world/hyderabad/7437kanuma.jpg',
      'https://images.moneycontrol.com/static-mcnews/2025/01/20250114180254_11.png?impolicy=website&width=770&height=431',
      'https://thumbs.dreamstime.com/b/decorated-bull-pongal-hindu-festival-musicians-take-around-as-tradtion-sankranti-marking-end-harvest-start-37056227.jpg'

    ],
    traditions: [
      'Decorating cattle',
      'Special poojas',
      'Feasting',
      'Rural games and community gatherings'
    ],
    foods: [
      {
        name: 'Pongal and traditional sweets',
        description: 'Delicious dishes like Pongal, Ariselu, and other festive foods',
        imageUrl: 'https://media.assettype.com/outlooktraveller%2F2024-01%2Ff4e959a6-3863-494d-b3c0-fd2e4a438211%2Fshutterstock_2246862175.jpg'
      }
    ],
    historicalContext: 'Kanuma celebrates and honors domestic cattle, integral to Indian agriculture, and follows the harvest festival of Sankranti.'
  },
  {
    id: 'mukkanuma',
    name: 'Mukkanuma',
    description: 'A traditional festival observed by farmers to worship nature and animals',
    longDescription: 'Mukkanuma is celebrated the day after Kanuma. It is dedicated to nature, livestock, and gratitude for the harvest season.',
    date: '2025-01-16',
    region: ['South India'],
    religion: ['Hindu'],
    images: [
      'https://imagesvs.oneindia.com/te/img/2019/01/mukkanuma-1547633837.jpg',
      'https://c8.alamy.com/comp/EG9R7W/musician-show-decorated-bull-gangireddu-skills-during-sankranti-pongal-EG9R7W.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGI6QLVAkz0o4nLmJ4FcFTadVi_2AfNTCpWw&s'
    ],
    traditions: [
      'Feasting with family',
      'Animal worship',
      'Offering food to deities',
      'Community gatherings'
    ],
    foods: [
      {
        name: 'Non-vegetarian delicacies',
        description: 'Traditional dishes including meat and rice prepared for community feasts',
        imageUrl: 'https://i.pinimg.com/736x/81/ae/4e/81ae4ee83f5c05059d7141de46fa39b7.jpg'
      }
    ],
    historicalContext: 'Mukkanuma is a thanksgiving festival to nature, cattle, and God after the harvest season, signifying abundance and prosperity.'
  },
  {
    id: 'sri-rama-navami',
    name: 'Sri Rama Navami',
    description: 'Celebrates the birth of Lord Rama, the seventh avatar of Vishnu',
    longDescription: 'Sri Rama Navami marks the birth of Lord Rama and is celebrated with great devotion across India, especially in temples with readings of the Ramayana and religious processions.',
    date: '2025-04-06',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://m.sakshipost.com/sites/default/files/styles/storypage_main/public/gallery_images/2025/04/5/Sri%20Rama%20Navami%20Celebrations%20in%20Bhadrachalam%20Photo%20Gallery_21-1743852011.jpg?itok=PskHLkeS',
      'https://media.telanganatoday.com/wp-content/uploads/2023/03/Rama-Navami-1.jpg',
      'https://assets.thehansindia.com/h-upload/2022/03/16/1282074-badra.webp'
    ],
    traditions: [
      'Recitations of Ramayana',
      'Temple celebrations',
      'Fasting and special prayers',
      'Processions with Rama idols'
    ],
    foods: [
      {
        name: 'Panakam and Kosambari',
        description: 'Traditional sweet and savory offerings prepared during the festival',
        imageUrl: 'https://i0.wp.com/sirisblog.com/wp-content/uploads/2021/04/20210420_195034-1-scaled.jpg?fit=2560%2C1920&ssl=1'
      }
    ],
    historicalContext: 'The day is believed to be the birth anniversary of Lord Rama of Ayodhya, symbolizing dharma, virtue, and righteousness.'
  },
  {
    id: 'hanuman-jayanti',
    name: 'Hanuman Jayanti',
    description: 'Commemorates the birth of Lord Hanuman, the ardent devotee of Lord Rama',
    longDescription: 'Hanuman Jayanti is observed by devotees of Lord Hanuman with prayers, offerings, and readings of Hanuman Chalisa. It celebrates strength, devotion, and loyalty.',
    date: '2025-04-12',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://animationxpress.com/wp-content/uploads/2021/01/Hanuman-in-The-legend-of-Hanuman-2-Copy.jpg',
      'https://www.animationxpress.com/wp-content/uploads/2021/01/Hanuman-in-The-legend-of-Hanuman-6.jpg'
    ],
    traditions: [
      'Reading Hanuman Chalisa',
      'Visiting Hanuman temples',
      'Offering sweets like laddus',
      'Organizing bhajans and prayers'
    ],
    foods: [
      {
        name: 'Laddu and other sweets',
        description: 'Devotional food offerings made to Lord Hanuman, especially laddus',
        imageUrl: 'https://www.kailashsweets.com/blog/wp-content/uploads/2022/06/group-indian-assorted-sweets-mithai-with-diya-scaled.jpg'
      }
    ],
    historicalContext: 'Hanuman Jayanti marks the birth of the mighty monkey god, Lord Hanuman, known for his unwavering devotion and immense strength.'
  },
  {
    id: 'varalakshmi-vratham',
    name: 'Varalakshmi Vratham',
    description: 'A festival dedicated to Goddess Lakshmi for prosperity and well-being',
    longDescription: 'Varalakshmi Vratham is a day when devotees worship Goddess Lakshmi for wealth, prosperity, and well-being, particularly in South India. Women fast and offer prayers to the goddess.',
    date: '2025-08-22',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://www.vummidi.com/blog/wp-content/uploads/2024/08/Why-is-Varalakshmi-Vratham-Especially-Important-for-Newly-Married-Women.jpg',
      'https://img1.wsimg.com/isteam/ip/9b32cde9-8a4b-4ae1-a25b-c072a5585a43/decor%20by%20krishna%2019-0001.jpg/:/',
      'https://www.sakshi.com/styles/webp/s3/article_images/2021/08/19/varalakshmi-vratam.jpg.webp?itok=_WGBsWvU'
    ],
    traditions: [
      'Fasting and prayers to Goddess Lakshmi',
      'Offering flowers and sweets',
      'Decorating the house with kolams',
      'Community gatherings and feasts'
    ],
    foods: [
      {
        name: 'Laddu and sweet pongal',
        description: 'Delicious sweets like laddu and pongal offered to Goddess Lakshmi',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HPnGLtXsFLrH44jZnFZJxHea4oAJJULdjA&s'
      }
    ],
    historicalContext: 'Varalakshmi Vratham is observed to seek blessings from Goddess Lakshmi for prosperity and welfare, particularly in the agricultural and business sectors.'
  },
  {
    id: 'vinayaka-chavithi',
    name: 'Vinayaka Chavithi',
    description: 'Celebrates the birth of Lord Ganesha, the remover of obstacles',
    longDescription: 'Vinayaka Chavithi marks the birth of Lord Ganesha and is celebrated with devotion across India, particularly in Maharashtra, with grand processions, Ganesh idol installations, and prayers.',
    date: '2025-08-27',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://s3images.zee5.com/wp-content/uploads/sites/7/2020/08/Vinayaka-Chavithi.jpg',
      'https://stylesatlife.com/wp-content/uploads/2023/06/Vinayaka-Chavithi-Decor.jpg',
      'https://www.hindustantimes.com/ht-img/img/2024/09/13/1600x900/ganesh-visarjan_4d96b8b4-7a83-11e6-9f8c-92f0a5be7f74_1726209675848.jpg'
    ],
    traditions: [
      'Installing Ganesha idols',
      'Offering modaks and other sweets',
      'Reciting Ganesha prayers',
      'Participating in processions'
    ],
    foods: [
      {
        name: 'Modak and other sweets',
        description: 'Modak is the favorite sweet of Lord Ganesha, offered during the festival',
        imageUrl: 'https://blog.swiggy.com/wp-content/uploads/2024/09/Salted-Modaks-1024x538.jpg'
      }
    ],
    historicalContext: 'Vinayaka Chavithi is a day to worship Lord Ganesha, who is believed to remove obstacles and bring good fortune. The day ends with the immersion of Ganesha idols in water bodies.'
  },
  {
    id: 'bathukamma',
    name: 'Bathukamma',
    description: 'A floral festival celebrated by women in Telangana, symbolizing the goddess Gauri',
    longDescription: 'Bathukamma is a festival celebrated predominantly in Telangana, where women arrange flowers in beautiful patterns and pray to Goddess Gauri for health, wealth, and prosperity.',
    date: '2025-09-22',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://utsav.gov.in/public/uploads/event_picture_image/event_81/1649398022983012388.jpg',
      'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-f3818761d52q6q7e4sjfalg6g7-20211012074746.Medi.jpeg',
      'https://www.yuvnews.com/admin/public/files/2018/October%202018/bathukamma%201.jpg'
    ],
    traditions: [
      'Arranging flowers in Bathukamma patterns',
      'Singing folk songs and dancing',
      'Offering prayers to Goddess Gauri'
    ],
    foods: [
      {
        name: 'Special sweets and snacks',
        description: 'Traditional sweets like garelu and pulihora prepared during the festival',
        imageUrl: 'https://i.pinimg.com/736x/05/93/1f/05931fcb7fb87b61305884fc9fa3707f.jpg'
      }
    ],
    historicalContext: 'Bathukamma is dedicated to Goddess Gauri, an incarnation of Goddess Parvati. It is celebrated by women as a way to honor the goddess and pray for the well-being of their families.'
  },
  {
    id: 'bonalu',
    name: 'Bonalu',
    description: 'A Hindu festival celebrating Goddess Mahakali, observed in Telangana',
    longDescription: 'Bonalu is celebrated with offerings to Goddess Mahakali, especially in Hyderabad and other parts of Telangana. Devotees offer food, including rice cooked with milk and jaggery, to the goddess.',
    date: '2025-07-20',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://www.abhibus.com/blog/wp-content/uploads/2023/06/Hyderabad-Bonalu-2023.jpg',
      'https://utsav.gov.in/public/uploads/event_picture_image/event_1996/1719900331849944054.jpg',
      'https://image-timescontent.timesgroup.com/thumb/702720.webp'
    ],
    traditions: [
      'Offering Bonalu (food offerings) to Goddess Mahakali',
      'Carrying decorated pots with offerings',
      'Participating in processions and prayers'
    ],
    foods: [
      {
        name: 'Bonalu (rice cooked with milk and jaggery)',
        description: 'A special dish prepared with rice, milk, and jaggery, offered to Goddess Mahakali',
        imageUrl: 'https://www.cookshideout.com/wp-content/uploads/2014/08/Bellam-Payasam-FI-500x375.jpg'
      }
    ],
    historicalContext: 'Bonalu is a festival to honor Goddess Mahakali, symbolizing the victory of good over evil and seeking her blessings for health and prosperity.'
  },
  {
    id: 'karthika-pournami',
    name: 'Karthika Pournami',
    description: 'A sacred day in the Hindu calendar dedicated to Lord Shiva and Lord Vishnu',
    longDescription: 'Karthika Pournami is celebrated during the full moon of the Karthika month, with special prayers to Lord Shiva and Lord Vishnu. Devotees light lamps to seek blessings for health, wealth, and prosperity.',
    date: '2025-11-12',
    region: ['South India', 'Pan India'],
    religion: ['Hindu'],
    images: ['https://th-i.thgim.com/public/migration_catalog/article10970612.ece/alternates/FREE_1200/HY07MEDAK_LAMPS',
      'https://static-gi.asianetnews.com/images/01fkq6mbh86b7k01mtb90zyfxj/karthika-masam-celebrations-end-today-photo-gallery-2-jpg.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNaqXeJcOuEIM-XTt476n8RXt-cbaN0oGU2PcUmHzw5KLhV5EyC8QaTiM8lEWQE5euJZQ2ns81cR_tqQT8YxiZ10vjYYp4XFGTq9XS7-j0uwO1g_HKcsVX19wLA53NWldHPe4Q0J0XHpY/w1200-h630-p-k-no-nu/Karthika+Pournami+2015.jpg'
    ],
    traditions: [
      'Lighting lamps and oil diyas',
      'Prayers to Lord Shiva and Lord Vishnu',
      'Visiting temples',
      'Community feasts'
    ],
    foods: [
      {
        name: 'Sweet Pongal and Laddu',
        description: 'Special sweets prepared during the festival, including Pongal and Laddu',
        imageUrl: 'https://www.cadburydessertscorner.com/hs-fs/hubfs/dc-website-2022/articles/easy-pongal-sweets-you-can-make-in-a-single-pot/coconut-ladoo.webp?width=1015&height=767&name=coconut-ladoo.webp'
      }
    ],
    historicalContext: 'Karthika Pournami is believed to be the day when Lord Vishnu appeared as the incarnation of the tortoise to hold the world during the churning of the ocean.'
  },
  {
    id: 'ratha-saptami',
    name: 'Ratha Saptami',
    description: 'A festival dedicated to the Sun God, celebrating the beginning of spring',
    longDescription: 'Ratha Saptami is celebrated on the seventh day of the bright fortnight in the month of Magha. Devotees offer prayers to the Sun God, thanking him for his blessings and seeking health and prosperity.',
    date: '2025-02-04',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://tirupatitirumalainfo.com/wp-content/uploads/2018/01/Surya-Jayanti.jpg',
      'https://www.hindustantimes.com/ht-img/img/2024/02/16/1600x900/ratha_saptami_thumb_1708002905504_1708069691958.jpg'
    ],
    traditions: [
      'Offering prayers to the Sun God',
      'Taking a ritualistic bath early in the morning',
      'Organizing community processions'
    ],
    foods: [
      {
        name: 'Sweets like Kesari and Pongal',
        description: 'Traditional sweets like Kesari and Pongal are prepared during Ratha Saptami',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmiCv1mlPZw6RpSLM-a_CVpYGv3pk3Uwu6Q&s'
      }
    ],
    historicalContext: 'Ratha Saptami marks the day when the Sun’s rays are believed to be at their most auspicious, and the day is dedicated to worshipping Surya, the Sun God.'
  },
  {
    id: 'dusshera',
    name: 'Dusshera',
    description: 'A festival marking the victory of good over evil, commemorating Lord Rama\'s victory over Ravana',
    longDescription: 'Dusshera, also known as Vijayadashami, is a festival that celebrates the victory of Lord Rama over the demon king Ravana, symbolizing the triumph of good over evil. It is celebrated with processions, effigy burnings, and prayers.',
    date: '2025-10-02',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: [
      'https://www.kidzherald.com/wp-content/uploads/2024/09/Dussehra-Festival.webp',
      'https://cdn.britannica.com/12/262512-050-F4A08A21/An-effigy-of-Ravana-the-10-headed-king-of-the-demons-rakshasas-goes-up-in-flames-marking-the-end-of-Dussehra-festival-at-Ghatkopar-on-October-24-2023-in-Mumbai-India-Hinduism-Hindu-mythology.jpg',
      'https://itsgoa.com/wp-content/uploads/2017/09/2-4.jpg'
    ],
    traditions: [
      'Burning effigies of Ravana',
      'Organizing grand processions',
      'Reading the Ramayana'
    ],
    foods: [
      {
        name: 'Sweets like Jalebi and Peda',
        description: 'Festive sweets like Jalebi and Peda are often prepared during Dusshera',
        imageUrl: 'https://www.rajbhog.com/wp-content/uploads/2023/07/Delicious-Indian-Sweets-for-Every-Celebration-870x635.jpg'
      }
    ],
    historicalContext: 'Dusshera commemorates the victory of Lord Rama over Ravana, signifying the ultimate triumph of righteousness over evil.'
  },
  {
    id: 'naraka-chaturdashi',
    name: 'Naraka Chaturdashi',
    description: 'A festival celebrated a day before Diwali to mark the defeat of the demon Narakasura',
    longDescription: 'Naraka Chaturdashi is celebrated to mark the victory of Lord Krishna over the demon king Narakasura. The day is known for early morning rituals, bathing in oil, and celebrating with fireworks.',
    date: '2025-10-20',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://visionastro.com/uploads/blog/1698573129-blog_image.jpg',
      'https://static.sadhguru.org/d/46272/1635823370-1635823369228.jpeg'
    ],
    traditions: [
      'Taking an oil bath',
      'Lighting diyas and bursting crackers',
      'Offering prayers to Lord Krishna'
    ],
    foods: [
      {
        name: 'Sweets like Ladoo and Barfi',
        description: 'Sweets like Ladoo and Barfi are prepared for Naraka Chaturdashi celebrations',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDxHMzTpQm6Djt8kGvWXcxhASN5B2cdqEHA&s'
      }
    ],
    historicalContext: 'Naraka Chaturdashi is celebrated as the day when Lord Krishna killed the demon Narakasura, freeing the world from his terror.'
  },
  {
    id: 'nagula-chavithi',
    name: 'Nagula Chavithi',
    description: 'A festival dedicated to worshipping serpents for fertility and prosperity',
    longDescription: 'Nagula Chavithi is a festival primarily observed in Andhra Pradesh and Telangana, where people worship serpents and seek blessings for a prosperous harvest and a fertile future.',
    date: '2025-11-03',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://images.moneycontrol.com/static-mcnews/2024/11/20241104045634_Nagula.jpg?impolicy=website&width=1600&height=900',
      'https://image-timescontent.timesgroup.com/thumb/548644.webp',
      'https://image-timescontent.timesgroup.com/thumb/623543.webp'
    ],
    traditions: [
      'Worshipping snake idols',
      'Offering prayers for fertility and prosperity',
      'Preparing traditional sweets and foods'
    ],
    foods: [
      {
        name: 'Sweets like Coconut Ladoo and Chakrapongali',
        description: 'Coconut Ladoo and Chakrapongali are prepared during the festival',
        imageUrl: 'https://somethingiscooking.com/wp-content/uploads/2021/04/Coconut-Ladoo-6.jpg'
      }
    ],
    historicalContext: 'Nagula Chavithi is a day dedicated to worshipping snakes, which are considered auspicious for fertility, prosperity, and a good harvest.'
  },
  {
    id: 'sravana-sukravaralu',
    name: 'Sravana Sukravaralu',
    description: 'A festival observed on Fridays in the month of Sravana to worship Goddess Lakshmi',
    longDescription: 'Sravana Sukravaralu is dedicated to the worship of Goddess Lakshmi on Fridays during the Sravana month. It is believed that praying on this day brings wealth, prosperity, and happiness.',
    date: '2025-08-08',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://chinnajeeyar.org/wp-content/uploads/2017/08/Sravana-Sukravaram-%E2%80%93-Key-to-God%E2%80%99s-Grace-is-Mother%E2%80%99s-Compassion.jpg',
      'https://i.pinimg.com/736x/16/40/75/16407534060fa597473ed3f9d50827e4.jpg',
      'https://i.ytimg.com/vi/UPQNy2L-s_M/maxresdefault.jpg'
    ],
    traditions: [
      'Offering prayers to Goddess Lakshmi',
      'Lighting lamps and diyas',
      'Reciting Lakshmi Ashtakshari Mantra',
      'Community feasts'
    ],
    foods: [
      {
        name: 'Sweets like Laddu and Pongal',
        description: 'Traditional sweets like Laddu and Pongal are offered during Sravana Sukravaralu',
        imageUrl: 'https://thumbs.dreamstime.com/b/laddu-sweets-bowl-candles-flowers-traditional-indian-food-celebrating-navratri-onam-pongal-laddu-sweets-bowl-351701048.jpg'
      }
    ],
    historicalContext: 'Sravana Sukravaralu is a day to invoke Goddess Lakshmi for blessings of wealth and prosperity, especially during the auspicious Sravana month.'
  },
  {
    id: 'polala-amavasya',
    name: 'Polala Amavasya',
    description: 'A day observed by married women to pray for the well-being of their husbands and children',
    longDescription: 'Polala Amavasya is observed on the no moon day of the month of Sravana. Married women pray to the deity Polamma to protect their families and ensure their well-being. Special offerings and rituals are performed.',
    date: '2025-01-29',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/09/Shravana-Amavasya.jpg',
      'https://telugu.cdn.zeenews.com/telugu/sites/default/files/pol4.jpg?im=FitAndFill=(640,360)',
      'https://telugu.cdn.zeenews.com/telugu/sites/default/files/pol5.jpg?im=FitAndFill=(640,360)'
    ],
    traditions: [
      'Performing rituals for the well-being of husbands and children',
      'Offering special prayers to Polamma',
      'Preparing traditional sweets and foods',
      'Visiting temples'
    ],
    foods: [
      {
        name: 'Traditional sweets like Laddu and Halwa',
        description: 'Sweets like Laddu and Halwa are prepared and offered as part of the rituals',
        imageUrl: 'https://www.kailashsweets.com/blog/wp-content/uploads/2022/06/group-indian-assorted-sweets-mithai-with-diya-scaled.jpg'
      }
    ],
    historicalContext: 'Polala Amavasya is a day dedicated to the worship of Polamma, seeking her blessings for the health and prosperity of families.'
  },
  {
    id: 'atla-taddi',
    name: 'Atla Taddi',
    description: 'A festival observed by married women for the prosperity of their families',
    longDescription: 'Atla Taddi is observed on the 6th day of the month of Bhadrapada. Married women perform rituals and offer prayers for the prosperity and happiness of their families. It is a day for women to celebrate together.',
    date: '2025-10-09',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://www.hlimg.com/images/events/738X538/event_1526730034m1.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU7gmKATkE6xVJ7y9WBwt6Ukk7efHc0e9U2ICMTpwYRnQTwVrnBGqmge4XEdxiPN1OcW_hNDh86q75jmcLmDWfhgeEIETSHpDxuOrFH7NsE9d9zvWtm5g-VzahKxczcCrSMgXqirSQ2aAE/s1600/atla-taddi-2015-810x405.jpg',
      'https://www.sakshi.com/article_images/2023/10/31/Atla-Tadde.jpg3_.jpg'],
    traditions: [
      'Offering prayers for the prosperity of husbands and children',
      'Preparing special foods and sweets',
      'Women gather to celebrate and share blessings'
    ],
    foods: [
      {
        name: 'Special foods like Atla Taddi and Payasam',
        description: 'Sweets like Atla Taddi and Payasam are prepared and shared among the community',
        imageUrl: 'https://www.indiafoodnetwork.in/h-upload/2023/08/21/1048956-shutterstock1933500896.jpg'
      }
    ],
    historicalContext: 'Atla Taddi is a festival dedicated to seeking the blessings of the divine for the prosperity of the family, particularly for the well-being of married women and their households.'
  },
  {
    id: 'gowri-pooja',
    name: 'Gowri Pooja',
    description: 'A festival dedicated to Goddess Gowri, celebrating femininity and invoking blessings for marriage and family',
    longDescription: 'Gowri Pooja is a significant festival for women in South India, where they worship Goddess Gowri for marital bliss and family well-being. The festival is observed the day before Ganesh Chaturthi.',
    date: '2025-09-16',
    region: ['South India'],
    religion: ['Hindu'],
    images: ['https://i.pinimg.com/736x/64/98/7b/64987b189ca6a450d2cf532d348ab420.jpg',
      'https://kkaj.in/wp-content/uploads/2020/07/f34d2-12028688_410065842518096_87017512806135444_o.jpg',
      'https://bridesessentials.wordpress.com/wp-content/uploads/2016/10/bridesessentials_sowmya3.jpg?w=825'
    ],
    traditions: [
      'Worshipping Goddess Gowri with rituals and prayers',
      'Fasting and offering prayers for marital happiness',
      'Preparing traditional sweets and food offerings'
    ],
    foods: [
      {
        name: 'Sweets like Modak and Laddu',
        description: 'Modak and Laddu are commonly prepared as offerings during the festival',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/modak.jpg'
      }
    ],
    historicalContext: 'Gowri Pooja is a day dedicated to the worship of Goddess Gowri, symbolizing femininity and invoking blessings for a prosperous married life and family well-being.'
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti',
    description: 'A harvest festival celebrated to mark the transition of the Sun into Capricorn',
    longDescription: 'Makar Sankranti is celebrated with great enthusiasm across India to mark the transition of the Sun into Capricorn. It is a harvest festival that signifies the end of winter and the beginning of the harvest season.',
    date: '2025-01-14',
    region: ['North India', 'South India', 'West India', 'Central India'],
    religion: ['Hindu'],
    images: ['https://images.moneycontrol.com/static-mcnews/2023/01/in-sankranti_20kite_20flying-770x433.png?impolicy=website&width=770&height=431',
      'https://utsav.gov.in/public/uploads/event_picture_image/event_501/16582167301406292907.jpg',
      'https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/14/feb295d8a22623c140db42a1aec5f4913755c.jpg'
    ],
    traditions: [
      'Flying kites',
      'Bonfires',
      'Offering prayers for a good harvest',
      'Community feasts'
    ],
    foods: [
      {
        name: 'Tilgul and Pongal',
        description: 'Sweets made from sesame seeds and jaggery, along with Pongal (a rice dish)',
        imageUrl: 'https://img.freepik.com/premium-photo/happy-makar-sankranti-pongal-uttarayan-with-kite-haldi-kum-kum-bowls-tilgul-sweets_156779-1273.jpg'
      }
    ],
    historicalContext: 'Makar Sankranti marks the start of the harvest season and is celebrated in different ways across India. It also signifies the sun’s journey into Capricorn and the arrival of warmer days.'
  },
  {
    id: 'navratri',
    name: 'Navratri',
    description: 'A nine-night festival celebrating the worship of Goddess Durga',
    longDescription: 'Navratri is one of the most prominent festivals in India, celebrated for nine nights in honor of Goddess Durga. Each day is dedicated to different forms of the goddess, and people celebrate with fasting, prayers, and dance.',
    date: '2025-10-02',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://c.ndtvimg.com/2024-10/d380e1sg_navratri-puja-how-to-balance-home-energies-and-attract-divine-blessings-exclusive_625x300_03_October_24.jpg',
      'https://www.savaari.com/blog/wp-content/uploads/2024/09/image-68-1024x682.png',
      'https://curlytales.com/wp-content/uploads/2024/09/1-148.jpg'
    ],
    traditions: [
      'Fasting and prayers',
      'Dandiya and Garba dances',
      'Puja ceremonies for different forms of Goddess Durga',
      'Visarjan of Durga idols'
    ],
    foods: [
      {
        name: 'Kuttu and Sabudana dishes',
        description: 'Special fasting foods like Kuttu (buckwheat flour) and Sabudana (tapioca pearls)',
        imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/sabukuttu-collage.jpeg?size=690:388'
      }
    ],
    historicalContext: 'Navratri is celebrated to honor the victory of Goddess Durga over the demon Mahishasura, symbolizing the triumph of good over evil.'
  },
  {
    id: 'republic-day',
    name: 'Republic Day',
    description: 'Celebrates the adoption of the Indian Constitution and the establishment of India as a republic',
    longDescription: 'Republic Day marks the date on which the Indian Constitution came into effect on January 26, 1950. The day is celebrated with grand parades, flag hoisting ceremonies, and patriotic programs across India.',
    date: '2025-01-26',
    region: ['Pan India'],
    religion: ['Secular'],
    images: ['https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/republic20221200-sixteen_nine.jpg?size=948:533',
      'https://i.pinimg.com/736x/ee/3e/26/ee3e260cc1f134bf50c5d11a9b51b531.jpg',
      'https://c.ndtvimg.com/2023-01/all5kktg_republic-day-parade-2023-pti_625x300_26_January_23.jpg'
    ],
    traditions: [
      'Flag hoisting ceremonies',
      'National parades',
      'Patriotic celebrations',
      'Honoring of national heroes and leaders'
    ],
    foods: [
      {
        name: 'Traditional Indian sweets',
        description: 'Various traditional Indian sweets and snacks are shared during the celebrations',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bzBgybsWbj23ahaKRLIzKXg2d9AHF3KJYQ&s'
      }
    ],
    historicalContext: 'Republic Day commemorates the adoption of the Indian Constitution on January 26, 1950, marking the birth of India as a republic.'
  },

  {
    id: 'lohri',
    name: 'Lohri',
    description: 'A festival celebrating the harvest season, particularly the harvest of sugarcane',
    longDescription: 'Lohri is celebrated to mark the end of winter and the beginning of the harvest season, especially in Punjab. It involves bonfires, singing traditional folk songs, and dancing Bhangra to celebrate the harvest of sugarcane and other crops.',
    date: '2025-01-13',
    region: ['North India', 'West India'],
    religion: ['Hindu'],
    images: ['https://www.theindianpanorama.news/wp-content/uploads/2022/01/lohri.jpg',
      'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/lohri%20festivals--b8b96c.jpg',
      'https://utsav.gov.in/public/uploads/event_cover_image/event_602/16595155611269959693.jpg'
    ],
    traditions: [
      'Lighting bonfires',
      'Bhangra and Gidda dances',
      'Singing traditional Lohri songs',
      'Offering sesame seeds and jaggery in the fire'
    ],
    foods: [
      {
        name: 'Tilgul and Rewari',
        description: 'Traditional sweets made from sesame seeds, jaggery, and sugarcane juice',
        imageUrl: 'https://www.shutterstock.com/image-photo/winter-delicacy-makar-sankranti-lohri-260nw-2095532587.jpg'
      }
    ],
    historicalContext: 'Lohri is celebrated as a harvest festival, especially in Punjab, and is dedicated to the harvest of sugarcane, marking the end of winter.'
  },
  {
    id: 'karva-chauth',
    name: 'Karva Chauth',
    description: 'A fasting ritual observed by married Hindu women for the well-being of their husbands',
    longDescription: 'Karva Chauth is a significant festival observed by married Hindu women. They fast from sunrise to moonrise, praying for the long life and prosperity of their husbands. The fast is broken after sighting the moon and offering prayers.',
    date: '2025-10-09',
    region: ['North India', 'West India'],
    religion: ['Hindu'],
    images: ['https://www.gorajasthan.travel/blog/wp-content/uploads/2021/05/Karwa-Chauth-1170x692-1-1170x675.png',
      'https://images.herzindagi.info/image/2021/Oct/karwa-chauth-celebration-after-wedding.jpg',
      'https://cdn0.weddingwire.in/article/4644/3_2/1280/jpg/124464-karwa-chauth-2024.webp'
    ],
    traditions: [
      'Fasting from sunrise to moonrise',
      'Prayer rituals for the husband’s well-being',
      'Breaking the fast after sighting the moon',
      'Wearing new clothes and jewelry'
    ],
    foods: [
      {
        name: 'Sweets and fruits',
        description: 'Traditional sweets and fruits offered after the fast is broken',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/0*3IyeoPMssGSes_l1.jpg'
      }
    ],
    historicalContext: 'Karva Chauth is a traditional fasting ritual where married women observe a day-long fast for the well-being and longevity of their husbands.'
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    description: 'Celebrates the bond between brothers and sisters',
    longDescription: 'Raksha Bandhan is a traditional Hindu festival that celebrates the affectionate bond between brothers and sisters. On this day, sisters tie a protective thread known as "rakhi" around their brothers’ wrists, and in return, brothers promise to protect them and offer gifts. The festival symbolizes love, protection, and family unity.',
    date: '2025-08-09',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://www.rajasthantoursindia.com/wp-content/uploads/2024/08/THE-IMPORTANCE-OF-RAKSHA-BANDHAN-1.jpg',
      'https://media.istockphoto.com/id/1171773557/photo/girl-and-boy-celebrating-raksha-bandhan-festival.jpg?s=612x612&w=0&k=20&c=pqnOo9rdORm3gfRMUMG2wgGrqL_N3y6YO3urisjNKRU=',
      'https://metro.co.uk/wp-content/uploads/2016/08/173296092.jpg?quality=80&strip=all'
    ],
    traditions: [
      'Sisters tie Rakhi on brothers’ wrists',
      'Exchange of sweets and gifts',
      'Prayers for siblings’ well-being',
      'Family gatherings and celebrations'
    ],
    foods: [
      {
        name: 'Sweets like Kaju Katli and Ladoo',
        description: 'Traditional Indian sweets are prepared and shared among family members during Raksha Bandhan',
        imageUrl: 'https://5.imimg.com/data5/KI/KY/MY-39083804/kaju-katli-and-ladoo.jpg'
      }
    ],
    historicalContext: 'The origins of Raksha Bandhan can be traced back to various legends in Hindu mythology, including the story of Lord Krishna and Draupadi. It has evolved into a celebration of the sacred sibling bond.'
  },

  {
    id: 'mahashivaratri',
    name: 'Mahashivaratri',
    description: 'A major Hindu festival dedicated to Lord Shiva, observed with fasting and night-long vigils',
    longDescription: 'Mahashivaratri is a Hindu festival dedicated to the worship of Lord Shiva. Devotees observe a day of fasting, night-long vigils, and prayers. It is considered one of the holiest nights to worship Lord Shiva.',
    date: '2025-02-26',
    region: ['Pan India'],
    religion: ['Hindu'],
    images: ['https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382409418678-590228619.png',
      'https://www.hindustantimes.com/ht-img/img/2024/03/08/original/MahashivratriTempleSector20-01_1709900392106.jpg',
      'https://static.sadhguru.org/d/46272/1668476968-mahashivratri-celebrations-banner-1.jpg'
    ],
    traditions: [
      'Fasting and night-long prayers',
      'Offering milk, honey, and water to the Shiva Lingam',
      'Chanting of mantras like “Om Namah Shivaya”',
      'Visiting Shiva temples'
    ],
    foods: [
      {
        name: 'Fruits and milk',
        description: 'Fruits, milk, and other light foods are consumed by devotees observing the fast',
        imageUrl: 'https://images.indianexpress.com/2022/10/pixabay_healthy-food-for-kids_1200.jpg'
      }
    ],
    historicalContext: 'Mahashivaratri is celebrated to honor Lord Shiva and is believed to be the day when Shiva performed the cosmic dance of creation, preservation, and destruction.'
  },
  {
    id: 'good-friday',
    name: 'Good Friday',
    description: 'A Christian observance commemorating the crucifixion of Jesus Christ',
    longDescription: 'Good Friday is observed by Christians around the world to commemorate the crucifixion and death of Jesus Christ. It is a day of mourning and reflection on the sacrifice Jesus made for the salvation of humanity.',
    date: '2025-04-18',
    region: ['Pan India'],
    religion: ['Christian'],
    images: ['https://media.nbcnewyork.com/2019/09/Good-Friday-Notre-Dame-After-Fire.jpg?quality=85&strip=all&resize=1200%2C675',
      'https://static1.straitstimes.com.sg/s3fs-public/articles/2018/03/30/hznovena03301.jpg?VersionId=xkfEJxjkf8ngMsmo9XdMeeBBkvV9kxxq',
      'https://www.distinctdestinations.in/DistinctDestinationsBackEndImg/downloads/Easter-celebration-Kerala-04.jpg'
    ],
    traditions: [
      'Attending church services',
      'Observing a day of fasting and reflection',
      'Meditating on the passion of Christ',
      'Reenacting the passion and crucifixion'
    ],
    foods: [
      {
        name: 'Fish and simple meals',
        description: 'On Good Friday, Christians often eat fish and avoid meat, following the tradition of fasting and penitence',
        imageUrl: 'https://www.chewoutloud.com/wp-content/uploads/2022/10/Easy-Lemon-Butter-Fish-Vertical-2-780x1170.jpg'
      }
    ],
    historicalContext: 'Good Friday commemorates the crucifixion of Jesus Christ, a pivotal event in Christian faith, marking his sacrifice for the redemption of humankind.'
  },
  {
    id: 'chhath-puja',
    name: 'Chhath Puja',
    description: 'A festival dedicated to the Sun God, celebrated primarily in Bihar, Uttar Pradesh, and Jharkhand',
    longDescription: 'Chhath Puja is a four-day festival dedicated to the Sun God, observed primarily in the states of Bihar, Uttar Pradesh, and Jharkhand. Devotees fast, perform rituals, and offer prayers to the Sun for the well-being of their family and community.',
    date: '2025-10-28',
    region: ['North India', 'East India'],
    religion: ['Hindu'],
    images: ['https://drishtiias.com/images/uploads/1667468445_image1.png',
      'https://www.utsav.gov.in/public/uploads/event_picture_image/event_508/1657262337946278620.jpg',
      'https://media.easemytrip.com/media/Blog/India/637051198119524222/637051198119524222nRQm8C.jpg'
    ],
    traditions: [
      'Offering prayers to the Sun at sunrise and sunset',
      'Fasting and offering fruits and sweets',
      'Taking a holy dip in rivers or ponds',
      'Setting up offerings on the riverbank'
    ],
    foods: [
      {
        name: 'Thekua and fruits',
        description: 'Thekua (a traditional sweet) and fruits are offered as part of the puja offerings',
        imageUrl: 'https://clubmahindra.gumlet.io/blog/media/section_images/chandrakal-a4d260eb3179fdc.jpg?w=376&dpr=2.6'
      }
    ],
    historicalContext: 'Chhath Puja is a celebration of the Sun God, where devotees express gratitude and seek blessings for prosperity, health, and happiness.'
  },
  {
    id: 'gurpurab',
    name: 'Gurpurab',
    description: 'A Sikh festival that celebrates the birth anniversaries of the Sikh Gurus',
    longDescription: 'Gurpurab is a significant Sikh festival that commemorates the birth anniversaries of various Sikh Gurus, especially Guru Nanak Dev Ji. It is marked by prayer services, processions, and community meals (langar) in Gurudwaras.',
    date: '2025-11-05',
    region: ['Pan India', 'Northeast India'],
    religion: ['Sikh'],
    images: ['https://www.goldentempleamritsar.org/high-resolution-images/famous-temples/golden-temple/Gurpurab.jpg',
      'https://imgk.timesnownews.com/media/PTI28-11-2020_000128BL.jpg',
      'https://www.livemint.com/lm-img/img/2024/11/12/optimize/ANI-20231126332-0_1701048115735_1731401916725.jpg'
    ],
    traditions: [
      'Visiting Gurudwaras for prayer services',
      'Processions with the Guru Granth Sahib',
      'Feeding the community (Langar)',
      'Singing hymns and devotional songs'
    ],
    foods: [
      {
        name: 'Langar meal',
        description: 'A free community meal served to all visitors, irrespective of their background',
        imageUrl: 'https://preview.redd.it/what-is-in-a-langar-meal-v0-cifjkxcly3ua1.png?width=1036&format=png&auto=webp&s=f036f9312c84ab2f83ee381054973c3574422666'
      }
    ],
    historicalContext: 'Gurpurab celebrates the birth anniversaries of Sikh Gurus and is a day of reflection, devotion, and charity for the Sikh community.'
  },
  {
    id: 'baisakhi',
    name: 'Baisakhi',
    description: 'A harvest festival celebrated in Punjab and other parts of North India, marking the start of the harvest season',
    longDescription: 'Baisakhi is celebrated primarily in Punjab and other regions of North India as a harvest festival. It also holds religious significance, as it marks the formation of the Khalsa by Guru Gobind Singh Ji in 1699.',
    date: '2025-04-13',
    region: ['North India'],
    religion: ['Hindu', 'Sikh'],
    images: ['https://static.toiimg.com/thumb/msid-90802194,width-1280,height-720,resizemode-4/90802194.jpg',
      'https://res.cloudinary.com/kmadmin/image/upload/v1743754524/kiomoi/Vaisakhi1_8279.jpg',
      'https://thumbs.dreamstime.com/b/dance-baisakhi-procession-19197890.jpg'
    ],
    traditions: [
      'Celebrating the harvest season with traditional dances like Bhangra',
      'Visiting Gurudwaras and temples',
      'Offering prayers for a good harvest',
      'Celebrating the formation of the Khalsa (for Sikhs)'
    ],
    foods: [
      {
        name: 'Makki di Roti and Sarson da Saag',
        description: 'Traditional Punjabi dish made of maize roti and mustard greens',
        imageUrl: 'https://c.ndtvimg.com/2022-07/g2rnr1u_saag_120x90_08_July_22.png'
      }
    ],
    historicalContext: 'Baisakhi is both a harvest festival and a celebration of the creation of the Khalsa by Guru Gobind Singh Ji, making it significant for both Hindus and Sikhs.'
  },
  {
    id: 'bengali-new-year',
    name: 'Bengali New Year',
    description: 'The first day of the Bengali calendar, celebrated with traditional foods, cultural events, and religious observances',
    longDescription: 'Bengali New Year, also known as Pohela Boishakh, is celebrated on the first day of the Bengali calendar. It is a time for family gatherings, cultural events, and the enjoyment of traditional Bengali foods and sweets.',
    date: '2025-04-15',
    region: ['East India'],
    religion: ['Hindu'],
    images: ['https://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20140415/002564bc674514b6dae806.jpg',
      'https://images.news18.com/ibnlive/uploads/2019/04/Bengali-New-Year-in-Kolkata.jpg',
      'https://www.cheggindia.com/wp-content/uploads/2025/04/db-257952-Bengali-New-Year-V1.png'
    ],
    traditions: [
      'Celebrating with family gatherings and cultural events',
      'Visiting temples and offering prayers for prosperity',
      'Wearing new clothes and exchanging gifts',
      'Enjoying traditional Bengali sweets'
    ],
    foods: [
      {
        name: 'Panta Bhat and Ilish Bhaja',
        description: 'Panta Bhat (fermented rice) and Ilish Bhaja (fried hilsa fish), served as part of the traditional Bengali New Year meal',
        imageUrl: 'https://i.ytimg.com/vi/9Sh_5YbNBJg/sddefault.jpg'
      }
    ],
    historicalContext: 'Bengali New Year, also known as Pohela Boishakh, marks the beginning of the new year in the Bengali calendar and is celebrated with joy, cultural performances, and traditional food.'
  }

];