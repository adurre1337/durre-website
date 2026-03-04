---
title: "How I Made This Website"
date: 2026-03-04T10:46:52-06:00
draft: false
---
This was a deep, dark rabbit hole that I fell into while trying to migrate myself off of Gmail a few months ago and use something more personalized.

I had worked with Porkbun somewhat in the past, and saw that they had integrated with Proton for email hosting, plus the cost of the "durre.net" domain was super cheap so using Porkbun was a no brainer. Once I got my email setup and through the slog of moving over important logins, I started poking around other product offerings and found that they also offer web hosting. I didn't really have any ideas for what I would put on a website, but I figured it would be kinda cool to have one. 

I went back and forth whether I'd want to go with the simple, but slightly pricier WordPress option (also I didn't really have any need for a dynamic website) or try my hand at developing my own static content, which I have zero experience in.

I ended up opting for the latter as you can see. I did some research into how I can get my feet wet with web development and saw people online recommending Hugo as a decent framework. I skimmed a couple YouTube videos and immediately appreciated how straightforward it would be to get up and running with something basic.

I also had been talking with a friend about use cases for LLM's, so I figured why not give Anthropic's Claude a shot. For $20 I could potentially get a bespoke, decent-looking website? Given the pre-made themes I saw online were around $70, this was also a no brainer.

So I had the groundwork for how I'd kick-off this website:

    Step 0. Fix the VS Code dev environment on my desktop (something happened to the install in my recent Windows upgrade, cool.)
    Step 1. Get Hugo installed and a project started.
    Step 2. Get Claude Code installed and integrated into the Hugo project.
    Step 3. Push all this out to a GitHub repo for source control and CI/CD integration.
    Step 4. Publish the content to Porkbun's web hosting platform.
(edit: this textbox looks pretty sweet, I do not like the scroll bar however)

Seems simple enough, and honestly, it really was.

After getting Claude installed I kind of paused and started researching into "Skills" that other people created for web design. 
I didn't really want to just copy+paste other peoples' work (I can appreciate the irony here as I am using LLM to do all the webdev heavy lifting), plus I was curious to see if Claude would just.. work. So I ended up just prompting it directly. I let Claude know that this project was inteded to be a website developed using the Hugo platform. I wanted to start off simple with a generic pages for home, about, contact, and also a blog directory. I linked Claude to an example website whose design I liked, and off it went.

After about 5 minutes it had generated a fully functioning, decent-looking webpage. It had copied the syling almost exactly as the example webpage, but that's okay because I figured I could tweak the details later.

I got the code committed and pushed to my repo successfully, and in less than a couple hours we had already reached the final step!

Naturally, as it had already done so much for me, I asked Claude to suggest a CI/CD workflow using Github Actions. Claude then generated the deploy workflow code and let me know all I had to do was define the necessary secrets in Github - sweet. Porkbun provides all that when you spin up the web server, so that was pretty straightforward.

First attempt failed, Claude had defined another folder for FTP'ing the public content. Simple fix, just deploy the public content to './', the root directory on the web server. Quick change, and I had a fully functioning website.

All in all, this took me about 3 hours from getting my environment stood up to working with Claude and getting my "artistic vision" published to the World Wide Web. Pretty good timing considering it would have been weeks if not months of me playing with CSS and HTML to get this far.

I'll update this post with screenshots and more content as I go along, but for now I just wanted to get this up to test how an actual blog post would look.