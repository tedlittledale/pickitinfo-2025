"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  User,
  MapPin,
  Camera,
  Trophy,
} from "lucide-react";
import { useDataProtection } from "@/lib/data-protection";

import Link from "next/link";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [step, setStep] = useState<"info" | "confirm" | "submitted">("info");
  const [loading, setLoading] = useState(false);

  const { requestDataDeletion, isValidEmail } = useDataProtection();

  const handleSubmitDeletion = async () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (confirmText.toLowerCase() !== "delete my account") {
      alert('Please type exactly "DELETE MY ACCOUNT" to confirm');
      return;
    }

    setLoading(true);

    try {
      await requestDataDeletion(email, reason);
      setStep("submitted");
    } catch {
      alert("Failed to submit deletion request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const dataTypesToDelete = [
    {
      icon: User,
      title: "Personal Information",
      description: "Name, email, profile picture, and account details",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: MapPin,
      title: "Location Data",
      description: "GPS routes, cleanup locations, and map interactions",
      color: "bg-green-50 text-green-700",
    },
    {
      icon: Camera,
      title: "Photos & Content",
      description: "Before/after photos, comments, and user-generated content",
      color: "bg-purple-50 text-purple-700",
    },
    {
      icon: Trophy,
      title: "Achievements & Stats",
      description: "Cleanup statistics, badges, and community contributions",
      color: "bg-orange-50 text-orange-700",
    },
  ];

  if (step === "submitted") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                Account Deletion Request Submitted
              </h1>
              <p className="text-slate-600 mb-6">
                We&apos;ve received your request to delete your account. Our
                team will process this request within 30 days as required by UK
                GDPR.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">
                  What happens next?
                </h3>
                <ol className="text-sm text-blue-800 text-left space-y-2">
                  <li>
                    1. We&apos;ll verify your identity using the email address
                    provided
                  </li>
                  <li>2. Your account will be deactivated within 7 days</li>
                  <li>
                    3. All personal data will be permanently deleted within 30
                    days
                  </li>
                  <li>
                    4. You&apos;ll receive a confirmation email once deletion is
                    complete
                  </li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-semibold text-amber-900">
                      Changed your mind?
                    </h4>
                    <p className="text-sm text-amber-800">
                      Contact us at{" "}
                      <a href="mailto:support@pickit.app" className="underline">
                        support@pickit.app
                      </a>{" "}
                      within 7 days to cancel this request.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trash2 className="h-8 w-8 text-red-600" />
            <h1 className="text-3xl font-bold text-slate-900">
              Delete Your Account
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Permanently remove your account and all associated data from PickIt
          </p>
        </header>

        {step === "info" && (
          <div className="space-y-6">
            {/* Warning Card */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <AlertTriangle className="h-5 w-5" />
                  Important: This Action Cannot Be Undone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 mb-4">
                  Account deletion is permanent and irreversible. Once your
                  account is deleted, you will lose access to all your data and
                  will not be able to recover it.
                </p>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">
                    Before you proceed:
                  </h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>
                      • Consider exporting your data first if you want to keep
                      it
                    </li>
                    <li>
                      • Make sure you really want to permanently delete
                      everything
                    </li>
                    <li>
                      • Check if you have any ongoing community commitments
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data to be deleted */}
            <Card>
              <CardHeader>
                <CardTitle>Data That Will Be Permanently Deleted</CardTitle>
                <CardDescription>
                  All of the following information will be completely removed
                  from our systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataTypesToDelete.map((dataType, index) => {
                    const Icon = dataType.icon;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${dataType.color}`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="h-5 w-5 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">{dataType.title}</h4>
                            <p className="text-sm mt-1">
                              {dataType.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Deletion Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Immediate (0-24 hours)</h4>
                      <p className="text-sm text-slate-600">
                        Account deactivated, login disabled
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Within 7 days</h4>
                      <p className="text-sm text-slate-600">
                        Personal data anonymized, account marked for deletion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Within 30 days</h4>
                      <p className="text-sm text-slate-600">
                        Complete permanent deletion from all systems and backups
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={() => setStep("confirm")}
                variant="destructive"
                size="lg"
                className="px-8"
              >
                I Understand - Proceed with Deletion
              </Button>
            </div>
          </div>
        )}

        {step === "confirm" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">
                Final Confirmation Required
              </CardTitle>
              <CardDescription>
                Please provide the following information to confirm your account
                deletion request
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email address associated with your account"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium mb-2"
                >
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Help us improve by telling us why you're leaving (optional)"
                  className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label
                  htmlFor="confirm"
                  className="block text-sm font-medium mb-2"
                >
                  Type &quot;DELETE MY ACCOUNT&quot; to confirm *
                </label>
                <Input
                  id="confirm"
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="DELETE MY ACCOUNT"
                  required
                />
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">
                      Final Warning
                    </h4>
                    <p className="text-sm text-red-800 mt-1">
                      By clicking &quot;Delete My Account&quot;, you confirm
                      that you understand this action is permanent and
                      irreversible. All your data will be permanently deleted
                      and cannot be recovered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep("info")}
                  className="flex-1"
                >
                  Go Back
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleSubmitDeletion}
                  disabled={
                    loading ||
                    !email ||
                    confirmText.toLowerCase() !== "delete my account"
                  }
                  className="flex-1"
                >
                  {loading ? "Processing..." : "Delete My Account Permanently"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Legal Information */}
        <Card className="mt-8 bg-slate-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-slate-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Your Rights Under UK GDPR
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  You have the right to request deletion of your personal data
                  under Article 17 of UK GDPR (Right to Erasure). We will
                  process your request within 30 days as legally required.
                </p>
                <div className="mt-3 space-x-4">
                  <a
                    href="/privacy"
                    className="text-sm text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/contact"
                    className="text-sm text-primary-600 hover:underline"
                  >
                    Contact DPO
                  </a>
                  <a
                    href="mailto:privacy@pickit.app"
                    className="text-sm text-primary-600 hover:underline"
                  >
                    privacy@pickit.app
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
