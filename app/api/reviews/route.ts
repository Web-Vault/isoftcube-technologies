import { NextResponse } from 'next/server';

export async function GET() {
        try {
                const url =
                        'https://service-reviews-ultimate.elfsight.com/data/reviews?uris[]=ChIJ94ajp4mHXjkReMIf02rZXvY&filter_content=text_required&min_rating=5&page_length=100&order=date';
                const res = await fetch(url);
                const response = await res.json();

                // Log the entire response to see the structure
                // console.log('Full response:', response);

                // If the reviews are inside a property, log just that (adjust according to actual data structure)
                if (response.reviews) {
                        // console.log('Reviews:', response.reviews);
                } else {
                        console.log('Reviews property not found');
                }

                return NextResponse.json(response.result.data);
        } catch (error) {
                console.error('Failed to fetch reviews:', error);
                return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
        }
}
