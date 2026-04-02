import { Card } from '@/components/ui/card';
import { mockStories } from '@/components/feed/stories.mock';
import Image from 'next/image';

export function Stories() {
  return (
    <Card className="p-3">
      <div className="scrollbar-hide flex space-x-4 overflow-x-auto pb-2 md:pb-0">
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="flex shrink-0 flex-col items-center space-y-1"
          >
            <div className="relative">
              <div className="bg-grey-200 rounded-full bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-0.5">
                <Image
                  src={story.avatar}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-white object-cover"
                  alt={story.username}
                />
              </div>
            </div>
            <span
              className="w-16 truncate text-center text-xs"
              title={story.username}
            >
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
