'use client';

import { mockPosts } from '@/components/dashboard/feed.mock';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle } from 'lucide-react';

export function Feed() {
  return (
    <div className="space-y-6">
      {mockPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="flex items-center px-4">
            <div className="flex items-center space-x-3">
              <Image
                src={post.user.avatar}
                alt={post.user.username}
                width={64}
                height={64}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-semibold">
                {post.user.username}
              </span>
            </div>
          </div>

          <div className="relative aspect-square">
            <Image
              src={post.image}
              alt="Post"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {}}
                  className="h-auto p-0"
                >
                  <Heart className="text-foreground h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {}}
                  className="h-auto p-0"
                >
                  <MessageCircle className="text-foreground h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="text-sm font-semibold">{post.likes} likes</div>

            <div className="text-sm">
              <span className="font-semibold">{post.user.username} </span>
              {post.caption}
            </div>

            {post.comments > 0 && (
              <div className="text-muted-foreground text-sm">
                View all {post.comments} comments
              </div>
            )}

            <div className="text-muted-foreground text-xs">
              {post.timestamp}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
