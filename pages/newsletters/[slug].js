import Image from 'next/image'
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import {Layout} from '@/components'

import image from '../../assets/item.png'

export default function Newsletter() {
    return (
        <Layout>
            <section className="pt-[3rem] pb-[5rem]">
                <div className="post-container mx-auto">
                    <Image src={image} className="w-full h-[470px] object-cover rounded-t-xl mb-6" />

                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="font-semibold text-2xl">The Day The World Went Away</h1>
                            <span className="text-gray-500">8 min read</span>
                        </div>
                        <span className="text-gray-500">2 days ago</span>
                    </div>

                    <div className="mt-4">
                        <p className="text-gray-700">
                        Now, while that’s morbid, I choose to take a more positive spin on it and see it as an inspiring call to action. While Hemingway states that the world breaks us, he also adds that we become stronger in those broken places. So if the world tells you your writing, music, art, or business idea is absolute trash it hurts — but it’s also necessary. You and those ideas being broken are the only way to get stronger. If that first draft of a novel or that pitch for a business gets shot down and the whole thing falls apart in front of you, the chances are it wasn’t that great, and the chances are your next attempt will go the same way. But it’s a challenge to be better. Every rejection will hurt a little less because you get stronger. And when you get stronger, so does your ability to self-criticize and revise when necessary.
                        Even Hemingway needed to break his own writing. In fact, he rewrote the ending to A Farewell to Arms 39 times. And that’s just the ending. He also rewrote other passages multiple times and scrapped the original idea for the opening. And you know what? Some of these passages are pretty bad in comparison to the finished product.
                        Now, while that’s morbid, I choose to take a more positive spin on it and see it as an inspiring call to action. While Hemingway states that the world breaks us, he also adds that we become stronger in those broken places. So if the world tells you your writing, music, art, or business idea is absolute trash it hurts — but it’s also necessary. You and those ideas being broken are the only way to get stronger. If that first draft of a novel or that pitch for a business gets shot down and the whole thing falls apart in front of you, the chances are it wasn’t that great, and the chances are your next attempt will go the same way. But it’s a challenge to be better. Every rejection will hurt a little less because you get stronger. And when you get stronger, so does your ability to self-criticize and revise when necessary.     
                        Even Hemingway needed to break his own writing. In fact, he rewrote the ending to A Farewell to Arms 39 times. And that’s just the ending. He also rewrote other passages multiple times and scrapped the original idea for the opening. And you know what? Some of these passages are pretty bad in comparison to the finished product.
                        Now, while that’s morbid, I choose to take a more positive spin on it and see it as an inspiring call to action. While Hemingway states that the world breaks us, he also adds that we become stronger in those broken places. So if the world tells you your writing, music, art, or business idea is absolute trash it hurts — but it’s also necessary. You and those ideas being broken are the only way to get stronger. If that first draft of a novel or that pitch for a business gets shot down and the whole thing falls apart in front of you, the chances are it wasn’t that great, and the chances are your next attempt will go the same way. But it’s a challenge to be better. Every rejection will hurt a little less because you get stronger. And when you get stronger, so does your ability to self-criticize and revise when necessary.                        
                        Even Hemingway needed to break his own writing. In fact, he rewrote the ending to A Farewell to Arms 39 times. And that’s just the ending. He also rewrote other passages multiple times and scrapped the original idea for the opening. And you know what? Some of these passages are pretty bad in comparison to the finished product.
                        Now, while that’s morbid, I choose to take a more positive spin on it and see it as an inspiring call to action. While Hemingway states that the world breaks us, he also adds that we become stronger in those broken places. So if the world tells you your writing, music, art, or business idea is absolute trash it hurts — but it’s also necessary. You and those ideas being broken are the only way to get stronger. If that first draft of a novel or that pitch for a business gets shot down and the whole thing falls apart in front of you, the chances are it wasn’t that great, and the chances are your next attempt will go the same way. But it’s a challenge to be better. Every rejection will hurt a little less because you get stronger. And when you get stronger, so does your ability to self-criticize and revise when necessary.                          
                        Even Hemingway needed to break his own writing. In fact, he rewrote the ending to A Farewell to Arms 39 times. And that’s just the ending. He also rewrote other passages multiple times and scrapped the original idea for the opening. And you know what? Some of these passages are pretty bad in comparison to the finished product.
                        </p>
                    </div>

                    <div className="mt-6">
                        <IconButton style={{ backgroundColor: "#EAF1FB" }}>
                            <ShareIcon style={{ opacity: ".5" }} />
                        </IconButton>
                    </div>
                </div>
            </section>
        </Layout>
    )
}