// File: src/components/TermsModal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-14 18:45:00
 * Modal to display terms and conditions with an interactive checkbox.
 * Updated to navigate to ApplicationSuccess page on acceptance.
 */

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    if (hasAgreed && hasScrolledToEnd) {
      onAccept();
      onClose();
      // Navigate to ApplicationSuccess page
      navigate('/application-success');
    }
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setHasAgreed(checked === true);
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // 5px tolerance
    setHasScrolledToEnd(isAtBottom);
  };

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setHasAgreed(false);
      setHasScrolledToEnd(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] h-[90vh] bg-background glass flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-gradient text-3xl font-bold mb-2">Terms & Conditions</DialogTitle>
          <DialogDescription className="text-muted-foreground/80">
            Please read these terms carefully before applying for a campaign.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow my-4 pr-4" onScrollCapture={handleScroll}>
          <div className="prose prose-invert max-w-none text-muted-foreground/80">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <h3 className="font-bold text-lg text-foreground">Who We Are</h3>
                <p>
                  Kreatorkart is a creator-brand collaboration platform. We connect brands with verified creators for promotional campaigns and pay creators based on verified, organic views.
                  <br /><br />
                  <span className="italic">*By signing up or participating in a campaign, you agree to these Terms & Conditions.</span>
                </p>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Must be 16 years or older to participate.</li>
                  <li>Must have an active social media account in good standing (not banned or suspended) on Instagram, YouTube, Facebook, X/Twitter, or similar platforms.</li>
                  <li>Must provide accurate and up-to-date personal details when registering.</li>
                  <li>Must comply with all applicable local and platform-specific laws.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Creator Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li><strong>Authenticity:</strong> All engagement (views, likes, comments, shares) must be 100% organic.</li>
                  <li><strong>Follow Campaign Briefs:</strong> Stick to the brand's requirements (hashtags, tone, posting style, etc.).</li>
                  <li><strong>Post on Time:</strong> All deliverables must be posted within the campaign deadline.</li>
                  <li><strong>Proof of Work:</strong> Share valid post links/screenshots immediately after posting for verification.</li>
                  <li><strong>Content Safety:</strong> Content must be safe for all audiences; no hate speech, nudity, illegal promotion, or offensive material.</li>
                  <li><strong>No Misrepresentation:</strong> Do not mislead audiences about the brand or product.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">View Verification</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>In early phases, views are manually verified using screenshots, analytics, and links.</li>
                  <li>Fake or suspicious views will be excluded from payment calculations.</li>
                  <li>We reserve the right to withhold payment if fraudulent activity is detected.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Payment is made only for verified organic views.</li>
                  <li>Payments will be processed within 5-7 Business days after campaign completion and verification.</li>
                  <li>Platform Fee: A small service fee (as stated in the campaign details) will be deducted.</li>
                  <li>No Payment for content that violates terms or has fake/paid engagement.</li>
                  <li>No refunds or payments after the campaign budget is exhausted.</li>
                </ul>
                <p className="italic">*KreatorKart is not responsible for payment delays caused by banks, payment processors, or events beyond our control (Force Majeure).</p>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Purchasing fake views, likes, or engagement.</li>
                  <li>Using bots, click farms, or any automated tools.</li>
                  <li>Posting incomplete or altered brand messages.</li>
                  <li>Promoting competitor brands in the same campaign.</li>
                  <li>All campaign details, briefs, payment information, and brand materials are confidential. You must not share them with any third party without prior written consent from KreatorKart or the brand.</li>
                  <li>Posting offensive or unrelated content.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Termination & Suspension</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Violation of these terms may lead to immediate suspension from the platform and forfeiture of pending earnings.</li>
                  <li>Repeated violations may result in a permanent ban.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Intellectual Property</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Creators retain ownership of their content.</li>
                  <li>By participating in a campaign, you grant the brand and Kreatorkart a non-exclusive license to repost or reuse your content for promotional purposes, for marketing purposes only.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Dispute Resolution</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Any disputes regarding payment or verification must be raised within 7 days after campaign completion.</li>
                  <li>The platform's decision on verification and payment is final.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Liability</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>We are not responsible for disputes between creators and brands outside of the platform.</li>
                  <li>We do not guarantee specific earnings or campaign participation.</li>
                  <li>KreatorKart is not responsible for any losses, damages, or reputational harm arising from a creator's participation in a campaign.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Changes to Terms</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>We may update these Terms from time to time. Updated terms will be posted on our website with a revised date.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-bold text-lg text-foreground">Governing Law & Jurisdiction</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts in Your City.</li>
                </ul>
              </li>
            </ol>
          </div>
        </ScrollArea>

        {hasScrolledToEnd && (
          <div className="flex items-center space-x-2 my-4">
            <Checkbox
              id="terms-agree"
              checked={hasAgreed}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="terms-agree" className="text-sm">
              I have read and agree to all the rules and regulations.
            </Label>
          </div>
        )}
        
        <div className="flex justify-end space-x-2 flex-shrink-0 mt-4">
          <Button onClick={onClose} variant="ghost" className="gradient-border bg-background">
            Cancel
          </Button>
          <Button onClick={handleAccept} disabled={!hasAgreed || !hasScrolledToEnd} className="gradient-neon text-white">
            Accept & Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;