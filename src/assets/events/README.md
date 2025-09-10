# Event Gallery Images

This folder contains all the event images for the 1001 Whiskies Club gallery.

## Folder Structure

Each event has its own folder with the following naming convention:

- `[member-name]-sitting-[month]-[year]/` for member-hosted events
- `[location]-[month]-[year]/` for special events (e.g., Dullstroom)

## Image Naming Convention

For each event folder, use these standardized file names:

### Required Files:

- `cover.jpg` - Main cover image for the event card (recommended: 800x600px)
- `image1.jpg` - First gallery image
- `image2.jpg` - Second gallery image
- `image3.jpg` - Third gallery image
- `image4.jpg` - Fourth gallery image

### Image Specifications:

- **Format**: JPG or PNG
- **Cover Image**: 800x600px (4:3 aspect ratio)
- **Gallery Images**: 600x600px (1:1 aspect ratio) or 800x600px (4:3)
- **File Size**: Keep under 2MB per image for optimal loading
- **Quality**: High quality but optimized for web

## Current Events:

1. **fabians-sitting-2025/** - Fabian's Sitting (39th August 2025)
2. **kurts-sitting-july-2025/** - Kurt's Sitting (26th July 2025)
3. **rogers-sitting-july-2025/** - Roger's Sitting (5th July 2025)
4. **dullstroom-may-2025/** - Dullstroom Visit (23rd May 2025)
5. **brandons-sitting-april-2025/** - Brandon's Sitting (26th April 2025)
6. **johns-sitting-march-2025/** - John's Sitting (8th March 2025)
7. **gabas-sitting-december-2024/** - Gaba's Sitting (14th December 2024)
8. **kurts-sitting-october-2024/** - Kurt's Sitting (26th October 2024)
9. **shauns-sitting-june-2024/** - Shaun's Sitting (22nd June 2024)
10. **waynes-sitting-may-2024/** - Wayne's Sitting (4th May 2024)
11. **lees-sitting-march-2024/** - Lee's Sitting (2nd March 2024)

## Adding New Events:

1. Create a new folder following the naming convention
2. Add the 5 required images (cover.jpg + image1-4.jpg)
3. Update the `eventData` array in `GalleryPage.js` to include the new event
4. Add the necessary imports for the new images

## Tips:

- Use descriptive captions that tell the story of each image
- Ensure good lighting and composition for all photos
- Consider the overall visual flow when selecting which image to use as the cover
- Keep file names lowercase with hyphens for consistency
